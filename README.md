# Pester Docs

[![Netlify](https://img.shields.io/netlify/40fe79e6-b973-4855-b0c7-f1ab101d1f0f?label=Netlify&style=flat-square)](https://app.netlify.com/sites/pester-docs/deploys/40fe79e6-b973-4855-b0c7-f1ab101d1f0f)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](https://www.contributor-covenant.org/version/2/0/code_of_conduct)

This repository contains the source files for the [pester.dev](https://pester.dev) website.

The website is built using:

- [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator written in React
- [Alt3.Docusaurus.Powershell](https://docusaurus-powershell.netlify.com/), a Powershell Get-Help to markdown generator

## Local Development

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/)

### Installation

To install all required dependencies and start a local development server with live-reload:

```bash
yarn
yarn start
```

## Contributing

All website pages are written in markdown and can be located in the `/docs` folder.

To submit an update:

1. update the markdown (`.mdx`) files
2. submit a Pull Request

> 🔥 Please note that we are NOT accepting Pull Requests for the `Command Reference`
> as these pages are auto-generated using the Pester Get-Help documentation.

## Website Customization

All sources (except the `Command Reference`) are plain Docusaurus so
please:

- refer to the [Docusaurus 2 Documentation](https://v2.docusaurus.io/) for technical information
- report issues at the [Docusaurus Repository](https://github.com/facebook/docusaurus/issues)

> The global CSS overrides for the Pester website are found in `src/css/custom.css`

## Code of Conduct

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of
experience, nationality, personal appearance, race, religion, or sexual identity
and orientation.

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at coc@pester.dev. All complaints will be reviewed and investigated promptly and fairly.

[Read the full code of conduct](code_of_conduct.md)
