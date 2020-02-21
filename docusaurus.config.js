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
  themeConfig: {
    navbar: {
      title: 'Pester',
      logo: {
        alt: 'Pester Logo',
        src: 'img/logo_white.svg',
      },
      links: [
        { to: 'docs/quick-start', label: 'Docs', position: 'right' },
        { to: 'docs/commands/Add-AssertionOperator', label: 'Commands', position: 'right' },
        {
          href: 'https://github.com/pester/pester',
          label: 'GitHub',
          position: 'right',
        },
      ],
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
              to: 'docs/commands/Add-AssertionOperator',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href:
                'https://gitter.im/pester/Pester',
            },
            {
              label: 'PowerShell.org',
              href: 'https://powershell.org/forums/forum/pester/',
            },
            {
              label: 'Slack',
              href: 'https://powershell.slack.com/messages/C03QKTUCS',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
