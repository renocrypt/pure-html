# Pure HTML

A playground and learning project showcasing what can be achieved with vanilla web technologies (HTML, CSS, JavaScript, and TypeScript) without bundlers or frameworks.

## Project Purpose

This repository demonstrates how to leverage modern web capabilities natively in the browser without relying on bundlers, transpilers, or external build tools. It serves as:

- A learning resource for web developers
- A reference for modern browser capabilities
- A playground for experimenting with pure HTML/CSS/JS/TS solutions
- A demonstration of performance-focused web development

## Features

- **No Bundlers**: Everything runs directly in the browser without Webpack, Rollup, Parcel, etc.
- **Native ES Modules**: Using JavaScript's built-in module system
- **TypeScript Without Transpilation**: Utilizing browsers' ability to run TypeScript with [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
- **Modern CSS**: CSS variables, grid, flexbox, animations, and other modern features
- **Progressive Enhancement**: Working examples that adapt to browser capabilities
- **Responsive Design**: Mobile-first approaches with pure CSS
- **Browser APIs**: Demonstrations of modern browser APIs like:
  - Web Components
  - Intersection Observer
  - Fetch API
  - Local Storage / IndexedDB
  - Service Workers
  - Web Workers

## Getting Started

Since this project requires no build steps, you can run it with any simple HTTP server.

```bash
# Using Python's built-in HTTP server
python -m http.server

# Using Node.js with http-server (requires npm install -g http-server)
http-server

# Or just open the index.html file directly in your browser for many examples
```

## Project Structure

```
/
├── index.html            # Main entry point with navigation to examples
├── examples/             # Self-contained example directories
│   ├── web-components/   # Custom elements and shadow DOM examples
│   ├── css-variables/    # Dynamic CSS theming without JavaScript
│   ├── ts-modules/       # TypeScript without transpilation
│   ├── ...
├── common/               # Shared styles and utilities
│   ├── styles/           # Base CSS and variables
│   ├── js/               # Utility functions
│   ├── types/            # TypeScript declarations
└── assets/               # Images, fonts, and other static assets
```

## Browser Compatibility

This project targets modern evergreen browsers. Some features may require recent browser versions:

- Chrome/Edge 89+
- Firefox 89+
- Safari 14+

Each example will note specific browser requirements if applicable.

## Contributing

Contributions are welcome! If you have an example of what can be accomplished with pure HTML, CSS, or JavaScript, please submit a pull request.

## License

MIT

---

_Note: This project is intended for educational purposes. For production applications, bundlers and build tools often provide important optimizations, but understanding the underlying web platform is invaluable._ 