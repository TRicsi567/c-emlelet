import images from 'assets/images/lesson2';

export default {
  id: 1,
  title: 'Not pointers',
  difficulty: 'intermediate',
  length: 3,
  description: 'This is a very mean course yes indeed, very mean',
  exampleCode: `
  int add(int a, int b)
  {
    int sum = a + b;
    return sum;
  }`,
  textExplanations: [
    'This is a mean nice program',
    'Very tasty too',
    'Rece ruca pitty putty, első commit óta nem lettek átírva'
  ],
  visualExplanation: images
};
