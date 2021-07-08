const isUpperCase = str => /^[A-Z]+$/.test(str.replace(/[^a-zA-Z]+/g, ''));
const isQuestion = str => str.trim().slice(-1) === '?';
const isEmpty = str => str.trim() === '';

export const hey = message =>
  isUpperCase(message) && isQuestion(message)
    ? "Calm down, I know what I'm doing!"
    : isUpperCase(message)
    ? 'Whoa, chill out!'
    : isQuestion(message)
    ? 'Sure.'
    : isEmpty(message)
    ? 'Fine. Be that way!'
    : 'Whatever.';
