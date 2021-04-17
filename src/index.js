import inquirer from 'inquirer'

inquirer.prompt([
  {type: 'list', message: 'Bla:', name: 'thing', choices: [
    'choice1',
    'choice2',
    'choice3',
  ]}
]).then(({thing}) => {
  console.log(thing)
})