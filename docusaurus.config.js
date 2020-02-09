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
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/quick-start',
            },
            {
              label: 'Commands',
              to: 'docs/commands/Add-AssertionOperator',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/PSPester',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pester',
            },
            {
              label: 'Slack',
              href: 'https://powershell.slack.com/messages/C03QKTUCS',
            },
            {
              label: 'Gitter',
              href:
                'https://gitter.im/pester/Pester?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge',
            },
            {
              label: 'PowerShell.org',
              href: 'https://powershell.org/forums/forum/pester/',
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
      copyright: `Copyright © 2019-present Pester Team.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
