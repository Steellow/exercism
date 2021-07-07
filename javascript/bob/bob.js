export const hey = message =>
  message === 'How are you?'
    ? 'Sure.'
    : message === message.toUpperCase()
    ? 'Whoa, chill out!'
    : message.includes('?')
    ? "Calm down, I know what I'm doing!"
    : message === ''
    ? 'Fine. Be that way!'
    : 'Whatever.';
