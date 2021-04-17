import { interactiveList, InquirerType } from './interactiveList.js';
import { loading } from './loading.js';

const prompt = {
  type: InquirerType.list,
  message: '',
  name: 'name',
  choices: ['choice1', 'choice2', 'choice3'],
};

interactiveList(prompt, ({ [prompt.name]: name }) => {
  loading(() => console.log(`Logging: ${name}`));
});
