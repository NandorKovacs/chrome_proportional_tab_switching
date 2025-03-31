/**
 * Chrome Proportional Tab Switching
 * 
 * Overrides Ctrl+Num keybinds. If there are more than a configurable threshold
 * of active tabs (default: 15), it switches to uniformly distributed positions:
 * - Num 1 always goes to the first tab
 * - Num 9 always goes to the last tab
 * - Nums 2-8 are mapped to create uniform jumps between first and last tab
 * 
 * With fewer tabs than the threshold, it uses standard Chrome behavior.
 */

// Default threshold for switching to proportional behavior
const DEFAULT_TAB_COUNT_THRESHOLD = 15;

// Get the threshold from storage or use default
function getTabThreshold() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['tabThreshold'], (result) => {
      resolve(result.tabThreshold || DEFAULT_TAB_COUNT_THRESHOLD);
    });
  });
}

// Factor for proportional calculation (denominator)
const PROPORTION_FACTOR = 8;

// Listen for keyboard commands
chrome.commands.onCommand.addListener(async (command) => {
  // Extract the number from the command name
  const match = command.match(/switch-to-tab-(\d)/);
  if (!match) return;
  
  const requestedTabNumber = parseInt(match[1], 10);
  
  // Get the threshold from storage
  const tabThreshold = await getTabThreshold();
  
  // Query all tabs in the current window
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    const tabCount = tabs.length;
    
    if (tabCount === 0) return; // No tabs to switch to
    
    let targetIndex;
    
    if (tabCount <= tabThreshold) {
      // Standard Chrome behavior for tabs under the threshold
      if (requestedTabNumber <= tabCount) {
        targetIndex = requestedTabNumber - 1;
      } else {
        // If the requested tab number is larger than available tabs, do nothing
        return;
      }
    } else {
      // Always make 1 map to first tab and 9 map to last tab
      if (requestedTabNumber === 1) {
        targetIndex = 0; // First tab
      } else if (requestedTabNumber === 9) {
        targetIndex = tabCount - 1; // Last tab
      } else {
        // Create uniform jumps between first and last tab for numbers 2-8
        // We want to divide the tab range into 8 equal sections (for 9 positions)
        
        // Calculate the uniform step size between positions
        const step = (tabCount - 1) / 8;
        
        // Map requestedTabNumber to the corresponding position
        // This creates equal jumps between tab positions
        targetIndex = Math.round((requestedTabNumber - 1) * step);
      }
    }
    
    // Activate the calculated tab
    chrome.tabs.update(tabs[targetIndex].id, { active: true });
  });
});
