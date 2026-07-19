// @ts-check

import { themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pester',
  tagline: 'The ubiquitous test and mock framework for PowerShell',
  url: 'https://pester.dev',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  favicon: 'img/favicon.ico',
  organizationName: 'pester', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            type: 'doc',
            label: 'Docs',
            docId: 'quick-start',
            position: 'right'
          },
          {
            type: 'docSidebar',
            label: 'Tutorial',
            docsPluginId: 'tutorial',
            sidebarId: 'tutorial',
            position: 'right'
          },
          {
            type: 'doc',
            label: 'Commands',
            docId: 'commands/Add-ShouldOperator',
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
        theme: themes.github,
        darkTheme: themes.oceanicNext,
        additionalLanguages: [
          'bash',
          'powershell',
          'yaml'
        ],
        // Declaring magicComments replaces the defaults, so the built-in highlight directives
        // are repeated here. The diff directives mark lines added or removed relative to the
        // previous version of a snippet — used by the tutorial when it evolves a file.
        // Styling lives in src/css/custom.css.
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-diff-add-line',
            line: 'diff-add',
            block: { start: 'diff-add-start', end: 'diff-add-end' },
          },
          {
            className: 'code-block-diff-remove-line',
            line: 'diff-remove',
            block: { start: 'diff-remove-start', end: 'diff-remove-end' },
          },
        ],
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
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        // The follow-along tutorial lives in its own docs instance at /tutorial so it stays
        // single-sourced. Content in /docs is copied verbatim into versioned_docs/ at every
        // version cut, which would freeze and duplicate the tutorial per Pester version.

        // "id" below MUST match TUTORIAL_PLUGIN_ID in src/tutorial/tutorialData.js.
        // This is used to determine when to override the TableOfContents (TOC) with the combined tutorial tracker.
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: './sidebarsTutorial.js',
        editUrl: 'https://github.com/pester/docs/edit/main',
        // The progress tracker already shows the module, the page and where both sit in the
        // tutorial, so breadcrumbs would only repeat it.
        breadcrumbs: false,
        // Do not set disableVersioning here. It throws for an instance with no versions file.
        // Omitting it gives a single implicit version and no version dropdown, which is what we want.
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/pester/docs/edit/main',
          // Define which version ("current" vs versioned docs like "v5") that will use unversioned URIs /docs/...
          // "current" (v6) is the latest stable version.
          // When updated, also update static/_redirects to always support versioned URIs
          lastVersion: "current",
          includeCurrentVersion: true,
          disableVersioning: false,
          versions: {
            // "current" is content in /docs folder
            current: {
              label: "v6",
              // Empty path so the latest version (v6) uses unversioned URIs /docs/...
              path: ""
            }
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  future: {
    faster: true, // Use new @docusaurus/faster features for faster build
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // To support SSG worker threads (faster.ssgWorkerThreads)
    },
  }
};

export default config;
