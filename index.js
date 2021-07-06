const downloadCommonCustomCss = require('./src/download-common-custom-css');
const sidebarsNavModules = require('./src/sidebars-nav-modules');

const {
  footer,
  misc,
  navbar,
  stylesheets,
  themeConfig,
} = require('./src/docusaurus-config');

module.exports = {
  //sidebars.js
  sidebarsNavModules,

  //docusarus.config.js
  themeConfig,
  footer,
  navbar,
  stylesheets,
  misc,

  //download common css file
  downloadCommonCustomCss,
};
