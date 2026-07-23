# Static Website Template for OSPO

A ready-to-use static website template for Open Source Program Offices (OSPOs), built with [Docusaurus](https://docusaurus.io/) and styled with [PatternFly](https://www.patternfly.org/). Maintained by [Red Hat](https://github.com/RedHatOfficial).

Use this template to quickly stand up a documentation and blog site for your OSPO without starting from scratch.

## Features

- Docusaurus 3 static site generator
- PatternFly design system integration
- Blog with RSS/Atom feeds
- Documentation section with sidebar navigation
- GitHub Pages deployment workflow
- "Edit this page" links for easy contributions

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Opens a local development server at [http://localhost:3000](http://localhost:3000) with live reload.

### Build

```bash
npm run build
```

Generates static content into the `build` directory, ready for any static hosting service.

## Project Structure

```
├── blog/          # Blog posts (Markdown)
├── docs/          # Documentation pages (Markdown)
├── src/
│   ├── components/  # React components
│   ├── css/         # Custom styles
│   └── pages/       # Standalone pages
├── static/        # Static assets (images, favicon)
└── docusaurus.config.js  # Site configuration
```

## Customization

1. **Fork** this repository.
2. Edit `docusaurus.config.js` to set your site title, URL, and organization name.
3. Replace content in `docs/` and `blog/` with your own.
4. Update static assets in `static/` (favicon, logo).
5. Push to your fork — the included GitHub Actions workflow deploys to GitHub Pages.

## Contributing

Contributions are welcome. See the [Contributing to the Docs](https://redhatofficial.github.io/static-website-template-for-ospo/docs/contributing-to-docs) guide for details on editing documentation pages.

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.
