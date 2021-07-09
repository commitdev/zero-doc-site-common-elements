const navbar = ({ siteUrl, repositoryName }) => ({
  logo: {
    alt: 'Zero Logo',
    src: 'img/zero.svg',
  },
  items: [
    {
      href: `${siteUrl}/docs`,
      target: '_self',
      label: 'Docs',
      className: 'header-docs-link header-logo-24',
      position: 'right'
    },
    {
      href: 'https://slack.getzero.dev',
      label: 'Slack',
      className: 'header-slack-link header-logo-24',
      position: 'right',
    },
    {
      href: `https://github.com/commitdev/${repositoryName}`,
      label: 'Github',
      className: 'header-github-link header-logo-24',
      position: 'right',
    },
  ],
});

const footer = ({ siteUrl, repositoryName }) => ({
  links: [
    {
      items: [
        {
          href: `${siteUrl}/docs`,
          target: '_self',
          label: 'Docs',
          className: 'header-docs-link header-logo-24',
          position: 'right'
        },
        {
          href: 'https://slack.getzero.dev',
          label: 'Slack',
          className: 'header-slack-link header-logo-24',
          position: 'right',
        },
        {
          href: `https://github.com/commitdev/${repositoryName}`,
          label: 'Github',
          className: 'header-github-link header-logo-24',
          position: 'right',
        },
      ],
    },
  ],
});

const themeConfig = ({ siteUrl, repositoryName }) => ({
  colorMode: {
    defaultMode: 'dark',
  },
  navbar: navbar({ siteUrl, repositoryName }),
  footer: footer({ siteUrl, repositoryName }),
});

const misc = () => ({
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'commitdev',
});

const stylesheets = () => [
  'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;600;700;800&display=swap',
];

module.exports = {
  navbar,
  footer,
  themeConfig,
  stylesheets,
  misc,
}
