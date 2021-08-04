/**
 * 函数的类型
 * (num1: number, num2: number) => void，代表的就是一个函数类型
 */
type CalcFunc = (num1: number, num2: number) => void

function calc(fn: CalcFunc) {
  console.log(fn(20, 30));
}

function sum(num1: number, num2: number) {
  return num1 + num2
}

function mul(num1: number, num2: number) {
  return num1 * num2
}

calc(sum) // 50
calc(mul) // 600

/**
 * 参数的可选类型
 * (x: number, y?: number)
 */
function foo(x: number, y?: number) {}

// error: A required parameter cannot follow an optional parameter.
function foo1(x?: number, y: number) {}

/**
 * 默认参数
 * (x: number, y: number = 6)
 */
// 这个时候y的类型其实是 undefined 和 number 类型的联合
function foo2(x: number, y: number = 2) {}

/**
 * 剩余参数
 */
function sum1(...nums: number[]) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
const result1 = sum1(1, 2, 3)  // 6
const result2 = sum1(1, 2, 3, 4) // 10

/**
 * 可推导的this类型
 */
const info1 = {
  name: 'zonghuang',
  sayHello() {
    console.log(this.name)
  }
}
info1.sayHello();  // zonghuang

/**
 * 不确定的this类型
 */
function sayHello() {
  console.log(this.name)
}
const info2 = {
  name: 'zonghuang',
  sayHello
}
info2.sayHello()
/*
  上面的代码运行会报错
1. 这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全；
2. 所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的；
3. 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来调用函数；
*/

/**
 * 指定this的类型
 */
type NameType = {
  name: string
}

function sayHi(this: NameType, message: string) {
  console.log(this.name + ': ' + message)
}

const info3 = {
  name: 'zonghuang',
  sayHi: sayHi
}

// 隐式绑定
info3.sayHi('Hi');  // zonghuang: Hi

// 显示绑定
sayHi.call({name: 'kobe'}, '嘿嘿嘿')  // kobe: 嘿嘿嘿
sayHi.apply({name: 'james'}, ['666']) // james: 666

/**
 * 函数的重载
 */
// 编写一个add函数，希望可以对字符串和数字类型进行相加
// 但是这样编写，是错误的
function add(a1: number | string, a2: number | string): number | string {
  return a1 + a2; // error: Operator '+' cannot be applied to types 'string | number' and 'string | number'.
}

// 如何正确编写呢？
// 编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行调用
// 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现
// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
function add(a1: number, a2: number): number; // 没函数体
function add(a1: string, a2: string): string;

function add(a1: any, a2: any): any {
  return a1 + a2
}

console.log(add(20, 30)); // 50
console.log(add('aaa', 'bbb')); // aaabbb

// 在函数的重载中, 实现函数是不能直接被调用的
add({name: "zonghuang"}, {age: 18}) // error

/**
 * 联合类型和重载
 */
// 现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度
// 注：在可能的情况下，尽量选择使用联合类型来实现

// 实现方式一: 联合类型
function getLength(a: string | any[]) {
  return a.length
}
console.log(getLength('abc'))           // 3
console.log(getLength([123, 321, 123])) // 3

// 实现方式二: 函数的重载
function getLength(a: string): number;
function getLength(a: any[]): number;
function getLength(a: any) {
  return a.length
}
console.log(getLength("abc"))           // 3
console.log(getLength([123, 321, 123])) // 3

export {}
