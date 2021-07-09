const child_process = require('child_process');
const fs = require('fs');

const githubRawContent = ({
  org = 'commitdev',
  repo = 'zero',
  branch = 'main',
  file,
}) => `https://raw.githubusercontent.com/${org}/${repo}/${branch}/${file}`;

const remoteCommonCssFile = githubRawContent({ file: 'doc-site/src/css/custom.css'});
const cssDownloadPath = './src/css/zero-downloaded-global-custom.css';

function download(url, saveTo) {
  const fileDir = saveTo.replace(/\/[\w-_.]+$/, "")

  if (!fs.existsSync(fileDir)){
    console.log('Creating dir', fileDir)
    fs.mkdirSync(fileDir, { recursive: true });
  }
  child_process.execFileSync('curl', ['--silent', '-f', '-L', url, '-o', saveTo], {encoding: 'utf8'});
  return saveTo;
}

const downloadCommonCustomCss = (options) => {
  const { downloadSourceOverwrite = undefined, saveToOverwrite = undefined } = options || {}
  return download(downloadSourceOverwrite || remoteCommonCssFile, saveToOverwrite || cssDownloadPath);
}

module.exports = downloadCommonCustomCss