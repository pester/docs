/**
 * Please note that the syntax highlighting theme CANNOT be configured here,
 * it MUST be configured in swizzled shadow component `/src/theme/index.js`
*/
module.exports = {
  title: 'Pester',
  tagline: 'The ubiquitous test and mock framework for PowerShell',
  url: 'https://pester.dev',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  favicon: 'img/favicon.ico',
  organizationName: 'pester', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themeConfig: {
    metadata: [
      {
        name: 'theme-color',
        content: '#0072c6'
      },
      // Use viewport-fit=cover to stretch website into safe-area (camera notch, swipe-for-menu etc.) on mobile.
      // Combine with padding in CSS to avoid conflicts using env(safe-area-inset-*) variables
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover'
      }
    ],
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
          href: 'https://github.com/pester/docs',
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
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
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
              href: 'https://github.com/sponsors/nohwnd',
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
          editUrl: 'https://github.com/pester/docs/edit/main',
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
