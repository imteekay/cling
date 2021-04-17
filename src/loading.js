import ora from 'ora';
import chalk from 'chalk';

export function loading(task, succeedText = 'Yay!') {
  const spinner = ora(chalk.underline('Loading')).start();

  try {
    task();
    spinner.succeed(chalk.green(succeedText));
  } catch (error) {
    spinner.fail(chalk.red(`Error: ${error}`));
  }
}
