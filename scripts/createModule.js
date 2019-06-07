import fs from 'fs-extra';
import path from 'path';
import renameFilesRecursive from './renameFilesRecursive';

export default (moduleName) => {
  try {
    if (!moduleName) {
      throw new Error('Missing required argument `module name`')
    }
    let isCustomModule = false;

    if (fs.existsSync(path.join(__dirname, '../templates/custom'))) {
      isCustomModule = true;
    }

    const modulePath = path.join(__dirname, `../templates/module/${isCustomModule ? 'custom' : 'default'}`);
    const newModulePath = `${process.cwd()}/${moduleName}`;

    if (fs.existsSync(newModulePath)) {
      throw new Error(`Module ${moduleName} already exists at ${newModulePath}`);
    }

    console.log(`Creating ${moduleName} module`.cyan);

    fs.copy(modulePath, newModulePath, () => {
      renameFilesRecursive(newModulePath, moduleName);
    });

    console.log(`${moduleName} module was created successfully`.green);
  } catch (err) {
    console.log(`${err}`.red);
  }
};