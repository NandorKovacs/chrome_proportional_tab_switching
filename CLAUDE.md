# CLAUDE.md - Chrome Proportional Tab Switching Extension

## Development Commands
- **Build Extension**: `npm run build`
- **Development Mode**: `npm run dev` 
- **Lint Code**: `npm run lint`
- **Fix Linting Issues**: `npm run lint:fix`
- **Test**: `npm test`
- **Test Single File**: `npm test -- path/to/test.js`

## Code Style Guidelines
- **Format**: Use Prettier with default settings
- **Imports**: Group imports (1. External 2. Internal 3. Types)
- **Naming**: camelCase for variables/functions, PascalCase for classes/components
- **Types**: Use TypeScript types for all variables and functions
- **Error Handling**: Use try/catch with specific error handling
- **Comments**: JSDoc format for functions, /* */ for multi-line, // for single-line
- **Max Line Length**: 100 characters
- **Indentation**: 2 spaces

This extension modifies Chrome's tab switching behavior to be proportional when many tabs are open.