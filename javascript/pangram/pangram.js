const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //prettier-ignore

export const isPangram = str =>
  alphabet.every(a => str.toLowerCase().includes(a));
