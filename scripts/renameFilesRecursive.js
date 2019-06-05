import fs from 'fs-extra';
import path from 'path';
import replace from 'replace';

function camelCase(string) {
  return string[0].toLowerCase() + string.substring(1, string.length);
}

function renameFilesRecursive(dir, moduleName, type = '') {
  try {
    fs.readdirSync(dir).forEach(data => {
      const dataPath = path.resolve(dir, data);
      const isDirectory = fs.statSync(dataPath).isDirectory();

      if (isDirectory) {
        renameFilesRecursive(dataPath, moduleName, data.toLowerCase())
      } else {
        replace({
          regex: 'className',
          replacement: (data === 'index.js') ? `${camelCase(moduleName)}` : `${moduleName}`,
          paths: [dataPath],
          recursive: false,
          silent: true
        });

        if (type === 'components' || type === 'containers') {
          const newModuleName = type === 'components' ? `${moduleName}Component.js` : `${moduleName}Container.js`;

          fs.renameSync(dataPath, dataPath.replace(/(?!.*\/).+/, newModuleName));

          return;
        }

        if (type === 'assets') {
          const assetName = `${moduleName}.scss`;

          fs.renameSync(dataPath, dataPath.replace(/(?!.*\/).+/, assetName));

          return;
        }
      }
    });
  } catch (err) {
    console.log(`${err}`.red);
  }
};

export default renameFilesRecursive;