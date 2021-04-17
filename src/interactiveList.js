import inquirer from 'inquirer';

export const InquirerType = {
  input: 'input',
  number: 'number',
  confirm: 'confirm',
  list: 'list',
  rawlist: 'rawlist',
  expand: 'expand',
  checkbox: 'checkbox',
  password: 'password',
  editor: 'editor',
};

export function interactiveList(prompt, callback) {
  return inquirer.prompt([prompt]).then(callback);
}
