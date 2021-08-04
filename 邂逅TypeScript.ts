const message: string = 'hello';
console.log(message);

const myInfo: object = {
  name: 'zonghuang',
  age: 18
}

// myInfo['name'] = '宗皇';    // Element implicitly has an 'any' type because expression of type '"name"' can't be used to index type '{}'.
// console.log(myInfo['age']); // 报错同上，只是 name 改为 age
// console.log(myInfo.age);  // Property 'age' does not exist on type 'object'.

const s1: symbol = Symbol('title')
const s2: symbol = Symbol('title')

const person = {
  [s1]: '帅哥',
  [s2]: '天才'
}

console.log(person);
