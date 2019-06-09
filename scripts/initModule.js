import fs from 'fs-extra';
import path from 'path';

export default () => {
  try {
    const customModulePath = process.cwd();
    const modulePath = path.join(__dirname, '../templates/module');

    if (fs.existsSync(`${modulePath}/custom`)) {
      throw new Error(`Custom module was initialized`);
    }

    console.log(`Initializing custom module`.cyan);

    fs.copySync(customModulePath, `${modulePath}/custom`);

    console.log(`Custom module was initialized successfully`.green);
  } catch (err) {
    console.log(`${err}`.red);
  }
}