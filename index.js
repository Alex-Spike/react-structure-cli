import program from 'commander';
import createComponent from './bin/createComponent';
import createModule from './bin/createModule';

program
  .command('component <name>')
  .option('-s, --stateless', 'Create stateless component')
  .option('-p, --pure', 'Create pure component')
  .option('-n, --normal', 'Create component')
  .action(createComponent);

program
  .command('module <name>')
  .action(createModule);

program.parse(process.argv);