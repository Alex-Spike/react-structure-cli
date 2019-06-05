import fs from 'fs-extra';
import path from 'path';

export default () => {
  try {
    const customModulePath = process.cwd();
    const modulePath = path.resolve(new URL(import.meta.url).pathname, '../../templates/module');

    if (fs.existsSync(`${modulePath}/custom`)) {
      throw new Error(`Custom module was initiated`);
    }

    fs.copySync(customModulePath, `${modulePath}/custom`);
  } catch (err) {
    console.log(`${err}`.red);
  }
}