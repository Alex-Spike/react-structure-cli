import fs from 'fs-extra';
import paths from '../bin/paths';
import copyFolder from '../bin/copyFolder';
import renameFilesRecursive from './renameFilesRecursive';

export default (moduleName) => {
  try {
    if (!moduleName) {
      throw new Error('Missing required argument `module name`')
    }

    let hasCustomModule = false;

    if (fs.existsSync(paths.customModule)) {
      hasCustomModule = true;
    }

    const templateModulePath = hasCustomModule ? paths.customModule : paths.defaultModule;
    const newModulePath = `${fs.realpathSync(process.cwd())}/${moduleName}`;

    if (fs.existsSync(newModulePath)) {
      throw new Error(`Module ${moduleName} already exists at ${newModulePath}`);
    }

    console.log(`Creating ${moduleName} module`.cyan);

    copyFolder(templateModulePath, newModulePath);

    renameFilesRecursive(newModulePath, moduleName);

    console.log(`${moduleName} module was created successfully`.green);
  } catch (err) {
    console.log(`${err}`.red);
  }
};