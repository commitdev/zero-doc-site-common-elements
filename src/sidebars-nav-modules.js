// This is an issue with docusaurus's linking, to link to a relative path
// not part of the SPA, you must prepend this prefix,
// or React router will get confused to push the path inside SPA
// https://github.com/facebook/docusaurus/issues/3309#issuecomment-678249433
const externalPrefix = 'pathname://';

module.exports = () => ({
  type: 'category',
  label: 'Modules',
  collapsed: false,
  items: [
    {
      type: 'link',
      label: 'Zero Core',
      href: `${externalPrefix}/docs/zero`,
    },
    {
      type: 'link',
      label: 'AWS EKS stack',
      href: `${externalPrefix}/docs/modules/aws-eks-stack`,
    },
    {
      type: 'link',
      label: 'Frontend',
      href: `${externalPrefix}/docs/modules/frontend-react`,
    },
    {
      type: 'link',
      label: 'Backend - Go',
      href: `${externalPrefix}/docs/modules/backend-go`,
    },
    {
      type: 'link',
      label: 'Backend - Node.js',
      href: `${externalPrefix}/docs/modules/backend-nodejs`,
    }
  ]
});