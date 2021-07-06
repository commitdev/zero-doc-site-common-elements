const child_process = require('child_process');

const remoteCommonCssFile = 'https://raw.githubusercontent.com/commitdev/zero/main/doc-site/src/css/custom.css';
const cssDownloadPath = './src/css/zero-downloaded-global-custom.css';

function downloadCss(url, saveTo) {
  child_process.execFileSync('curl', ['--silent', '-f', '-L', url, '-o', saveTo], {encoding: 'utf8'});
  return saveTo;
}

module.exports = (options) => {
  const { downloadSourceOverwrite = undefined, saveToOverwrite = undefined } = options || {}
  return downloadCss(downloadSourceOverwrite || remoteCommonCssFile, saveToOverwrite || cssDownloadPath)
}