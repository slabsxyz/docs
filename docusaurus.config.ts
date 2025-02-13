import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Security Labs',
  tagline: 'Key Management for Chain Abstraction',
  favicon: 'img/functor_logo.png',
  url: 'https://docs.securitylabs.xyz',
  baseUrl: '/',
  organizationName: 'slabsxyz', // Usually your GitHub org/user name.
  trailingSlash: true,
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  // onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/slabsxyz/docs/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/slabsxyz/docs/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/functor_social_card.jpg',
    navbar: {
      title: 'Functor Network Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/functor_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/slabsxyz/docs',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'docsVersionDropdown',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Telegram',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Twitter',
              href: 'https://x.com/FunctorNetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/slabsxyz',
            },
            {
              label: 'Site',
              href: 'https://www.securitylabs.xyz/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Serendipity Global Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
