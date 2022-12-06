import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const year = new Date().getFullYear();

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/UXev/nextra-blog',
  useNextSeoProps: () => ({
    titleTemplate: '%s - Archive',
  }),
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Archive" />
      <meta property="og:description" content="UXev's Blog" />
    </>
  ),
  logo: <span>Archive</span>,
  project: {
    link: 'https://github.com/UXev/nextra-blog',
  },

  footer: {
    text: `Junseong Park © ${year}`,
  },
};

export default config;
