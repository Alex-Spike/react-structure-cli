import fs from 'fs-extra';
import path from 'path';
import renameFilesRecursive from './renameFilesRecursive';

export default (moduleName) => {
  console.log(moduleName, 'moduleName');
  try {
    const modulePath = path.resolve(new URL(import.meta.url).pathname, '../../templates/module/default');
    const newModulePath = `${process.cwd()}/${moduleName}`;

    if (fs.existsSync(newModulePath)) {
      throw new Error(`Module ${moduleName} allready exists at ${newModulePath}`);
    }

    console.log(`Creating ${moduleName} module`.cyan);

    fs.copySync(modulePath, newModulePath);

    renameFilesRecursive(newModulePath, moduleName);

    console.log(`${moduleName} module was created successfully`.green);
  } catch (err) {
    console.log(`${err}`.red);
  }
};