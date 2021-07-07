export const toRna = input =>
  input.replace('G', 'C').replace('C', 'G').replace('T', 'A').replace('A', 'U');
