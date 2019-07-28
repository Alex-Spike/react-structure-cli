import program from 'commander';
import componentAction from './actions/componentAction';
import moduleAction from './actions/moduleAction';

program
  .command('component <name>')
  .option('-s, --stateless', 'Create stateless component')
  .option('-p, --pure', 'Create pure component')
  .option('-n, --normal', 'Create component')
  .action(componentAction);

program
  .command('module [name]')
  .option('-g, --generate', 'Generate new module')
  .option('-i, --init', 'Init your own module')
  .option('-r, --reset', 'Reset to default module structure')
  .action(moduleAction);

program.version('1.0.1');
program.parse(process.argv);