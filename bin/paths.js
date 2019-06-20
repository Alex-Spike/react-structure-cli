import fs from 'fs-extra';
import path from 'path';

const appDirectory = fs.realpathSync(path.resolve(__dirname, '../'));
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

export default {
  module: resolvePath('templates/module'),
  customModule: resolvePath('templates/module/custom'),
  defaultModule: resolvePath('templates/module/default'),
  appPath: resolvePath('.'),
  getComponentPathByType: (type) => resolvePath(`templates/components/${type}.js`)
};