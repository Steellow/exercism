export const decodedValue = input =>
  parseInt([COLORS.indexOf(input[0]), COLORS.indexOf(input[1])].join(''));

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
