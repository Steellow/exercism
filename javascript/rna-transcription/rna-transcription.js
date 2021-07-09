export const toRna = input =>
  input
    .split('')
    .map(c => (c === 'G' ? 'C' : c === 'C' ? 'G' : c === 'T' ? 'A' : 'U'))
    .join('');
