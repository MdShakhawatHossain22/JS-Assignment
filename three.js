function isLgSeven(outputs) {
  if (outputs < 7) {
    return outputs - 7;
  } else {
    return outputs * 2;
  }
}
const outputs = 15;
console.log(isLgSeven(outputs));
