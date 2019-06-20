import fs from 'fs-extra';

export default (from, to) => {
  fs.copySync(from, to, {
    dereference: true
  });
};