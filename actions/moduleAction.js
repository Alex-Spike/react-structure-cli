import createModule from '../scripts/createModule';
import initModule from '../scripts/initModule';
import resetModule from '../scripts/resetModule';

export default (moduleName, cmd) => {
  try {
    const { init, reset } = cmd;

    if (init) {
      initModule();
    } else if (reset) {
      resetModule();
    } else {
      createModule(moduleName);
    }
  } catch (err) {
    console.log(`${err}`.red);
  }
}