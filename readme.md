# ModernWeb Playground

## Project Overview

ModernWeb Playground is a comprehensive collection of examples showcasing the power and capabilities of modern web technologies (HTML, CSS, JavaScript, and TypeScript) without relying on bundlers, frameworks, or complex build tools. This project demonstrates how far you can go with just the native web platform.

## Purpose

- **Educational Resource**: Learn modern web development concepts with minimal abstractions
- **Reference Implementation**: Practical examples of browser APIs and features
- **Development Playground**: Experiment with vanilla web technologies in isolated examples
- **Performance Demonstration**: Show how lightweight, framework-free solutions can be efficient

## Core Principles

- **Zero Build Steps**: All examples run directly in the browser without preprocessing
- **Native ES Modules**: Leverage JavaScript's built-in module system
- **Progressive Enhancement**: Examples work across different browser capabilities
- **Separation of Concerns**: Well-organized code that follows web standards
- **Accessibility First**: All examples follow accessibility best practices
- **Performance Focused**: Optimized for speed without framework overhead

## Project Structure

```
/
├── index.html                # Main landing page with navigation to all examples
├── examples/                 # Individual example directories
│   ├── basic/                # Simple, single-file examples
│   │   ├── hover-effects.html
│   │   ├── css-variables.html
│   │   └── ...
│   ├── intermediate/         # More complex examples with separate files
│   │   ├── web-components/
│   │   ├── css-animations/
│   │   └── ...
│   └── advanced/             # Advanced implementations
│       ├── spa-router/
│       ├── state-management/
│       └── ...
├── common/                   # Shared resources
│   ├── css/                  # Base styles and utilities
│   ├── js/                   # Shared JavaScript functions
│   └── ts/                   # TypeScript declarations and utilities
├── assets/                   # Static assets (images, fonts, etc.)
└── docs/                     # Additional documentation and tutorials
```

## Planned Examples

### Basic Examples (Single File)
- CSS Variables and Theming
- Responsive Layouts with CSS Grid and Flexbox
- CSS Animations and Transitions
- Form Validation with Constraint Validation API
- Local Storage and Session Storage

### Intermediate Examples
- Custom Web Components
- ES Modules and Dynamic Imports
- Drag and Drop API
- Canvas and SVG Drawing
- Intersection Observer
- Fetch API and Async/Await

### Advanced Examples
- TypeScript Without Transpilation (using Import Maps)
- Simple SPA Router
- State Management Pattern
- Virtual DOM Implementation
- PWA Features (Service Workers, Manifest)
- WebRTC Basics
- IndexedDB Data Storage

## How to Use

1. Clone the repository
2. Serve the files using any simple HTTP server:
   ```
   # Using Python
   python -m http.server
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to individual examples directly in your browser
4. View source to understand implementation details

## Browser Compatibility

This project targets modern browsers with good standards support:
- Chrome/Edge 89+
- Firefox 89+
- Safari 14+
- Mobile browsers with equivalent support

Each example will indicate any specific browser requirements.

## Contributing

Contributions are welcome! If you'd like to add an example or improve existing ones:

1. Fork the repository
2. Create a new example or enhance an existing one
3. Ensure it follows the project principles (no build steps, clean code)
4. Submit a pull request with a clear description

## License

MIT License

---

This project is inspired by the evolution of web standards and the growing capabilities of modern browsers. While frameworks and build tools have their place, understanding the underlying web platform is invaluable for any web developer. 