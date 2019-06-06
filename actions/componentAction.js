import fs from 'fs-extra';
import path from 'path';
import replace from 'replace';

export default (componentName, cmd) => {
  try {
    const { stateless, pure, normal } = cmd;
    const newComponentName = `${componentName}Component`;
    const typeCmp = stateless && 'stateless' || pure && 'pure' || normal && 'normal';
    const componentPath = path.join(__dirname, `../templates/components/${typeCmp}.js`);;
    const newComponentPath = `${process.cwd()}/${newComponentName}.js`;


    if (fs.existsSync(newComponentPath)) {
      throw new Error(`Component ${componentName} allready exists at ${newComponentPath}, choose another name if you want to create a new component`);
    }

    fs.copy(componentPath, newComponentPath, function(err) {
      if (err) {
        throw new Error(err)
      }

      replace({
        regex: 'className',
        replacement: newComponentName,
        paths: [newComponentPath],
        recursive: false,
        silent: true,
      });

      console.log(`Component ${newComponentName} created at ${newComponentPath}.js`.green)
    });
  } catch (err) {
    console.log(`${err}`.red);
  }
};