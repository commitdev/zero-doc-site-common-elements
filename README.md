# zero-doc-site-common-elements

This repository is used to store common elements used in Zero module's documentation websites, each module lives with its own documentation website so they can be updated together, but the themes should be updated at once.


It provides:

## Common modules' doc site link for Docusaurus sidebar
Example Usage: 
```js
const { sidebarsNavModules } = require('@commitdev/zero-doc-site-common-elements');

module.exports = {
  sidebar: [
    {
      type: 'autogenerated',
      dirName: '.'
    },
    sidebarsNavModules(),
  ],
};
````

## Common elements in `docusaurus.config.js`

| exports | replaces | 
|---------|----------|
| `themeConfig` | `config.themeConfig` |
| `footer`  | `config.themeConfig.footer` |
| `navbar` | `config.themeConfig.navbar` |
| `stylesheets` | `config.stylesheets` |
| `misc` | `{ onBrokenLinks, onBrokenMarkdownLinks, favicon, organizationName }` |

## Function to download common CSS file from upstream repo
Example Usage: 

```js
const { downloadCommonCustomCss, themeConfig, stylesheets, misc } = require('@commitdev/zero-doc-site-common-elements');

// should consider try/catch incase this fails
const customCss = require.resolve(downloadCommonCustomCss());

module.exports = {
  ...allYourRegularConfig,
  presets: [[
    '@docusaurus/preset-classic',
    {
      ...docs,
      theme: {
        customCss,
      },
    },
  ]],
}
```