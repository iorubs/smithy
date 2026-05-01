// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Shared family navbar items. Keep in sync across all four smithy sites.
const familyNavItems = [
  {
    href: 'https://iorubs.github.io/smithy-cli/',
    label: 'CLI',
    position: 'left',
  },
  {
    href: 'https://iorubs.github.io/mcpsmithy/',
    label: 'MCPSmithy',
    position: 'left',
  },
  {
    href: 'https://iorubs.github.io/agentsmithy/',
    label: 'AgentSmithy',
    position: 'left',
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smithy',
  tagline: 'Tools for building agenting workflows',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://iorubs.github.io',
  baseUrl: '/smithy/',

  organizationName: 'iorubs',
  projectName: 'smithy',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        pages: {
          path: 'src/pages',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Smithy',
        logo: {
          alt: 'smithy',
          src: 'img/logo.svg',
          href: 'https://iorubs.github.io/smithy/',
          target: '_self',
        },
        items: [
          ...familyNavItems,
          {
            to: '/roadmap',
            label: 'Roadmap',
            position: 'left',
          },
          {
            href: 'https://github.com/iorubs/smithy',
            position: 'right',
            label: 'GitHub',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Smithy`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
