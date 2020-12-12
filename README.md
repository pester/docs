[![Netlify](https://img.shields.io/netlify/40fe79e6-b973-4855-b0c7-f1ab101d1f0f?label=Netlify&style=flat-square)](https://app.netlify.com/sites/pester-docs/deploys/40fe79e6-b973-4855-b0c7-f1ab101d1f0f)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](https://www.contributor-covenant.org/version/2/0/code_of_conduct)

# Pester Docs

This repository contains the source files used to generate the [pester.dev](https://pester.dev) website.

The website pages are written in markdown files using the `.mdx` format and are located in the `/docs` folder.

🔥 **One exception**: the pages in the "Command Reference" section are auto-generated using Pester's
[Comment Based Help](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_comment_based_help?view=powershell-7.1). Therefore, please do not create pull requests for these command reference pages here but instead, fix the corresponding
Pester Powershell source code (as found inside the [pester/pester](https://github.com/pester/pester)
repository).

## Contributing

To submit an update:

1. update the markdown `.mdx` file(s)
2. submit a pull request

## Local Development

The website is built using:

- [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator written in React
- [Alt3.Docusaurus.Powershell](https://docusaurus-powershell.netlify.com/), a Powershell Get-Help to markdown generator

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/)

### Installation

To install all required dependencies and start a local development server:

```bash
yarn
yarn start
```

## Website Customization

Because the website is using Docusaurus as the underlying technology:

- please refer to the [Docusaurus 2 Documentation](https://v2.docusaurus.io/) for usage information
  and available customization options
- please report technical issues at the [Docusaurus Repository](https://github.com/facebook/docusaurus/issues)

### Styling

The global CSS overrides for the Pester website are found in `src/css/custom.css`

### Tables

The Pester website uses interactive React tables. To change the content of the tables,
simply update the correlating `.json` configuration file as can be seen in
[this example](https://github.com/pester/docs/blob/master/docs/additional-resources/articles.table.js).

### Bumping Docusaurus

To upgrade docusaurus to a more recent version:

1. edit `package.json`
2. update the version number of these dependency pacakges:
    ```json
    @docusaurus/core": "^2.0.0-alpha.62",
    @docusaurus/preset-classic": "^2.0.0-alpha.62",
    ```
3. submit a pull request with (only) these updated files:
   - `package.json`
   - `yarn.lock`

## Code of Conduct

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of
experience, nationality, personal appearance, race, religion, or sexual identity
and orientation.

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at coc@pester.dev. All complaints will be reviewed and investigated promptly and fairly.

[Read the full code of conduct](code_of_conduct.md)
