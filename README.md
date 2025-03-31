# Chrome Proportional Tab Switching

A Chrome extension that overrides the Ctrl+Number keyboard shortcuts for tab switching. When you have many tabs open (more than 15), instead of switching to the tab with the specified number, it switches to a proportional position in your tab list.

## Behavior

- With tabs fewer than or equal to the threshold (default: 15): Standard Chrome behavior (Ctrl+1 goes to tab 1, etc.)
- With more tabs than the threshold:
  - Ctrl+1 always goes to the first tab
  - Ctrl+9 always goes to the last tab
  - Ctrl+2 through Ctrl+8 are mapped to create uniform jumps between the first and last tab
  
For example, with 100 tabs:
- Ctrl+1 → Tab 1
- Ctrl+2 → Tab 13
- Ctrl+3 → Tab 25
- Ctrl+4 → Tab 38
- Ctrl+5 → Tab 50
- Ctrl+6 → Tab 63
- Ctrl+7 → Tab 75
- Ctrl+8 → Tab 88
- Ctrl+9 → Tab 100
  
## Configuration

You have to set the desired keybinds yourself. Ctrl + N is recommended.

You can customize the tab threshold for proportional switching:
1. Right-click on the extension icon
2. Select "Options"
3. Set your preferred tab threshold
4. Click "Save"

## Development

- `npm run build`: Build the extension
- `npm run dev`: Build and prepare for development
- `npm run lint`: Check code for style issues
- `npm run lint:fix`: Fix code style issues automatically
- `npm run package`: Build and package the extension as a ZIP file ready for the Chrome Web Store

### To debug the Extension
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the extension
4. In Chrome, go to `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist` directory from this project
7. Configure keyboard shortcuts by going to `chrome://extensions/shortcuts` and setting up your preferred keys for each command (you can use Ctrl+1 through Ctrl+9 for standard behavior)


## License

MIT
