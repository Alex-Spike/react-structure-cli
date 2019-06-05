import fs from 'fs-extra';
import path from 'path';

export default () => {
  try {
    const modulePath = path.resolve(new URL(import.meta.url).pathname, '../../templates/module');

    if (fs.existsSync(`${modulePath}/custom`)) {
      fs.removeSync(`${modulePath}/custom`);

      console.log(`Custom module was removed successfully`.green);

      return;
    }

    console.log(`You don't have a custom module `.yellow);
  } catch (err) {
    console.log(`${err}`.red);
  }
}