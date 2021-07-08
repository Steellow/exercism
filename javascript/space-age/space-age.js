const periods = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const secondsInYear = 31557600;

export const age = (planet, age) => {
  const ageInYears = ((1 / periods[planet]) * age) / secondsInYear;
  return Math.round(ageInYears * 100) / 100; // For rounding to 2 decimals
};
