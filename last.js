function gemsToDiamond(a, b, c) {
  const first = a * 21;
  const second = b * 32;
  const third = c * 43;
  const total = first + second + third;
  if (total > 2000) {
    return total - 2000;
  } else {
    return total;
  }
}
const a = 1;
const b = 1;
const c = 1;
console.log(gemsToDiamond(a, b, c));
