/**
 * number 类型
 */
let num: number = 0;
num = 100;    // 十进制
num = 0b110;  // 二进制
num = 0o555;  // 八进制
num = 0xf23;  // 十六进制

/**
 * boolean 类型
 */
let flag: boolean = true;
flag = false;

/**
 * string 类型
 */
let message: string = 'hello';
// 字符串来拼接变量
const name = 'zonghuang';
const info = `my name is ${name}`;  // my name is zonghuang

/**
 * Array 类型
 */
const nums: number[] = [1, 2, 3];
const names1: string[] = ['abc', 'cba'];
const names2: Array<string> = ['abc', 'cba'];

/**
 * object 类型
 */
const myInfo: object = {
  name: 'zonghuang',
  age: 18
};

// 前两行编译时报错，最后一行在编辑器中就报错了
// 原因：我们不能从myinfo获取数据，也不能设置数据
myInfo['name'] = '宗皇';    // error: Element implicitly has an 'any' type because expression of type '"name"' can't be used to index type '{}'.
console.log(myInfo['age']); // 报错同上，只是 name 改为 age
console.log(myInfo.age);    // error: Property 'age' does not exist on type 'object'.

/**
 * symbol 类型
 */
const s1: symbol = Symbol('title');
const s2: symbol = Symbol('title');
const person = {
  [s1]: '帅哥',
  [s2]: '天才'
};
console.log(person);  // { [Symbol(title)]: '帅哥', [Symbol(title)]: '天才' }

/**
 * null 和 undefined 类型
 */
let n: null = null;
let u: undefined = undefined;

export {}
