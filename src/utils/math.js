export function sigma(from, to, formula, constants) {
  let sum = 0;

  for (let i = from; i <= to; i++) {
    sum += formula(i, constants);
  }

  return sum;
}
