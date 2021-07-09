module.exports = (config)=> ({
  type: 'category',
  label: 'Modules',
  collapsed: false,
  items: [
    {
      type: 'link',
      label: 'Zero Core',
      href: `${config.url}/docs/zero`,
      customProps: {
        target: '_self'
      }
    },
    {
      type: 'link',
      label: 'Infrastructure - AWS',
      href: `${config.url}/docs/modules/aws-eks-stack`,
      customProps: {
        target: '_self'
      }
    },
    {
      type: 'link',
      label: 'Frontend - React',
      href: `${config.url}/docs/modules/frontend-react`,
      customProps: {
        target: '_self'
      }
    },
    {
      type: 'link',
      label: 'Backend - Go',
      href: `${config.url}/docs/modules/backend-go`,
      customProps: {
        target: '_self'
      }
    },
    {
      type: 'link',
      label: 'Backend - Node.js',
      href: `${config.url}/docs/modules/backend-nodejs`,
      customProps: {
        target: '_self'
      }
    }
  ]
});