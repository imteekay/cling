import ora from 'ora';

export function loading(task, succeedText = 'Yay!') {
  const spinner = ora('Loading').start();

  try {
    task();
    spinner.succeed(succeedText);
  } catch (error) {
    spinner.fail(`Error: ${error}`);
  }
}
