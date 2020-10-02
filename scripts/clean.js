const sh = require('shelljs');
const path = require('path');

const destPath = path.resolve(path.dirname(__filename), '../docs');

sh.rm('-rf', `${destPath}/assets`);
sh.rm('-rf', `${destPath}/css`);
sh.rm('-rf', `${destPath}/js`);
sh.rm('-rf', `${destPath}/index.html`);
