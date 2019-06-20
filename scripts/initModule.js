import fs from 'fs-extra';
import paths from '../bin/paths';
import copyFolder from '../bin/copyFolder';

export default async () => {
  try {
    if (fs.existsSync(paths.customModule)) {
      throw new Error(`Custom module has been already initialized`);
    }

    const customModulePath = fs.realpathSync(process.cwd());

    console.log(`Initializing custom module`.cyan);

    copyFolder(customModulePath, paths.customModule);

    console.log(`Custom module was initialized successfully`.green);
  } catch (err) {
    console.log(`${err}`.red);
  }
}