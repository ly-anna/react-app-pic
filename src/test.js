// function* myGenerator() {
//   let first = yield 'first yield value';
//   let second = yield 'second yield value';
//   return 'third returned value';
// }

// const it = myGenerator();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
const url = 'https://dog.ceo/api/breeds/image/random'

let val = yield fetch(url);
console.log(val);