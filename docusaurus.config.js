/**
 * Please note that the syntax highlighting theme CANNOT be configured here,
 * it MUST be configured in swizzled shadow component `/src/theme/index.js`
*/
module.exports = {
  title: 'Pester',
  tagline: 'The ubiquitous test and mock framework for PowerShell',
  url: 'https://pester-docs.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pester', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themeConfig: {
    navbar: {
      title: 'Pester',
      logo: {
        alt: 'Pester Logo',
        src: 'img/logo_white.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          label: 'Docs',
          to: 'docs/quick-start',
          position: 'right'
        },
        {
          label: 'Commands',
          to: 'docs/commands/Add-ShouldOperator',
          position: 'right'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/pester/pester',
          position: 'right',
        },
        {
          type: 'search', // algolia search
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: [
        'powershell'
      ]
    },
    // Please note that the Algolia DocSearch crawler only runs once every 24 hours.
    // Configuration options below described at https://docusaurus.io/docs/search.
    algolia: {
      appId: 'Q2JBAARHQ6',
      apiKey: '59daca417dcd80d5cc18fac56af5c138',
      indexName: 'pester',
      contextualSearch: true,
      // searchParameters: {},
      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/quick-start',
            },
            {
              label: 'Installation',
              to: 'docs/introduction/installation',
            },
            {
              label: 'Command Reference',
              to: 'docs/commands/Add-ShouldOperator',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/pester/Pester',
            },
            {
              label: 'PowerShell.org',
              href: 'https://forums.powershell.org/c/pester/',
            },
            {
              label: 'Slack',
              href: 'https://powershell.slack.com/messages/C03QKTUCS',
            },
            {
              label: 'Discord (#testing)',
              href: 'https://discord.gg/powershell',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pester',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/PSPester',
            },
          ],
        },
        {
          title: 'Sponsoring',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pester/pester',
            },
            {
              label: 'Open Collective',
              href: 'https://opencollective.com/pester/donate',
            },
          ],
        },
      ],
      copyright: `Copyright Pester Team © 2019-present`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pester/docs/edit/master',
          lastVersion: "current",
          includeCurrentVersion: true,
          disableVersioning: false,
          versions: {
            current: {
              label: "v5",
              path: "",
            }
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
