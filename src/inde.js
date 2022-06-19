for (let i = 0; i < 100; i++) {
var a = 1 + i; b = i * 2;
  console.log(add(a, b));
  console.log(i)
}
function add(a, b) {
  return a + b
}

add()
const array = eee();
array.length;
array.push(6);
console.log(array);
const arr2 = [1, 2, 3, 4, 5];
array.slice(0, 2);
const newLocal = {
  name: 'a'
};
function eee() {
  const arr = [1, 2, 3, 4, 5];
  arr.push(newLocal)
  arr.slice(0, 2);
  return arr;
}
// function add(a, b) {         ss
// should return 100            ss
// Language: javascript         dd