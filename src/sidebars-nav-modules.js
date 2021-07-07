module.exports = (config)=> ({
  type: 'category',
  label: 'Modules',
  collapsed: false,
  items: [
    {
      type: 'link',
      label: 'Zero Core',
      href: `${config.url}/docs/zero`,
    },
    {
      type: 'link',
      label: 'AWS EKS stack',
      href: `${config.url}/docs/modules/aws-eks-stack`,
    },
    {
      type: 'link',
      label: 'Frontend',
      href: `${config.url}/docs/modules/frontend-react`,
    },
    {
      type: 'link',
      label: 'Backend - Go',
      href: `${config.url}/docs/modules/backend-go`,
    },
    {
      type: 'link',
      label: 'Backend - Node.js',
      href: `${config.url}/docs/modules/backend-nodejs`,
    }
  ]
});