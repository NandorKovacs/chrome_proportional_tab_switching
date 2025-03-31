// Default threshold for switching to proportional behavior
const DEFAULT_TAB_COUNT_THRESHOLD = 15;

// Save options to chrome.storage
function saveOptions() {
  const tabThreshold = document.getElementById('tabThreshold').value;
  
  chrome.storage.sync.set(
    { tabThreshold: parseInt(tabThreshold, 10) },
    () => {
      // Update status to let user know options were saved
      const status = document.getElementById('status');
      status.classList.add('visible');
      
      setTimeout(() => {
        status.classList.remove('visible');
      }, 1500);
    }
  );
}

// Restores input values using the preferences stored in chrome.storage
function restoreOptions() {
  chrome.storage.sync.get(
    { tabThreshold: DEFAULT_TAB_COUNT_THRESHOLD },
    (items) => {
      document.getElementById('tabThreshold').value = items.tabThreshold;
    }
  );
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);