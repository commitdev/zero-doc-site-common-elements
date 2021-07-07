// This is an issue with docusaurus's linking, to link to a relative path
// not part of the SPA, you must prepend this prefix,
// or React router will get confused to push the path inside SPA
// https://github.com/facebook/docusaurus/issues/3309#issuecomment-678249433
const externalPrefix = 'pathname://';

const navbar = ({ repositoryName }) => ({
  logo: {
    alt: 'Zero Logo',
    src: 'img/zero.svg',
  },
  items: [
    {
      href: `${externalPrefix}/docs`,
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

const footer = ({ repositoryName }) => ({
  links: [
    {
      items: [
        {
          href: `${externalPrefix}/docs`,
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

const themeConfig = ({ repositoryName }) => ({
  colorMode: {
    defaultMode: 'dark',
  },
  navbar: navbar({ repositoryName }),
  footer: footer({ repositoryName }),
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
