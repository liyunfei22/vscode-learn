for (let i = 0; i < 100; i++) {
  var a = 1 + i; b = i * 2;
  console.log(add(a, b));
  console.log(i)
}
function add(a, b) {
  return a + b
}