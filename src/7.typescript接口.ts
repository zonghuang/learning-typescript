/**
 * 接口的声明
 */
// 通过type声明一个对象类型
type Point = {
  x: number
  y: number
}

// 通过接口声明一个对象类型
interface Point {
  x: number
  y: number
}

/**
 * 可选属性、只读属性
 */
interface Person {
  name: string
  age?: number
  readonly friend?: {
    name: string
  }
}

const person: Person = {
  name: 'zonghuang',
  age: 18,
  friend: {
    name: 'kobe'
  }
}

console.log(person.name);
console.log(person.friend?.name);
person.friend = {} // 不可修改 error: Cannot assign to 'friend' because it is a read-only property.
person.friend.name = '123'  // 但这是可以执行的

/**
 * 索引类型
 */
interface FrontLanguage {
  [index: number]: string
}

const frontend: FrontLanguage = {
  1: 'HTML',
  2: 'CSS',
  3: 'JavaScript'
}

interface LanguageBirth {
  [name: string]: number
  Java: number
}

const language: LanguageBirth = {
  'Java': 1995,
  'JavaScript': 1996,
  'C': 1972
}

/**
 * 函数类型
 */
interface CalcFunc {
  (num1: number, num2: number): number
}

const add: CalcFunc = (num1, num2) => {
  return num1 + num2
}

const sub: CalcFunc = (num1, num2) => {
  return num1 - num2
}

// 当然，除非特别的情况，还是推荐大家使用类型别名来定义函数
type CalcFunc = (num1: number, num2: number) => number

/**
 * 接口继承
 */
interface Person {
  name: string
  eating: () => void
}

interface Animal {
  running: () => void
}

// 接口是支持多继承的（类不支持多继承）
interface Student extends Person, Animal {
  sno: number
}

const stu: Student = {
  sno: 1,
  name: 'zonghuang',
  eating: function() {},
  running: function() {}
}

/**
 * 接口的实现
 * 接口定义后，也是可以被类实现的
 * 
 * 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入；
 * 这就是面向接口开发
 */
interface ISwim {
  swimming: () => void
}

interface IRun {
  running: () => void
}

class Person implements ISwim, IRun {
  swimming() {
    console.log('swimming') 
  }

  running() {
    console.log('running')
  }
}

function swim(swimmer: ISwim) {
  swimmer.swimming()
}

const p = new Person()
swim(p) // swimming

/**
 * 交叉类型
 * 1.表示需要满足多个类型的条件
 * 2.使用 & 符号
 */
// 表达的含义是number和string要同时满足
// 但是有同时满足是一个number又是一个string的值吗？其实是没有的，所以MyType其实是一个never类型；
type MyType = number & string

/**
 * 交叉类型的应用
 * 
 * 在开发中，我们进行交叉时，通常是对对象类型进行交叉的
 */
interface Colorful {
  color: string
}

interface IRun {
  running: () => void
}

type NewType = Colorful & IRun

const obj: NewType = {
  color: 'red',
  running: function() {}
}

/**
 * interface和type区别
 * 
 * interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？
 * 1.如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function；
 * 2.如果是定义对象类型，那么他们是有区别的：
 *   interface 可以重复的对某个接口来定义属性和方法；
 *   而type定义的是别名，别名是不能重复的；
 */
interface IPerson {
  name: string
  running: () => void
}

interface IPerson {
  age: number
}

// type定义的是别名，别名是不能重复的
type Person = {
  name: string
  running: () => void
}

// error: Duplicate identifier 'Person'.ts(2300)
type Person = {
  age: number
}

/**
 * 字面量赋值
 */
interface IPerson {
  name: string
  eating: () => void
}

// Object literal may only specify known properties, and 'age' does not exist in type 'IPerson'.
const p: IPerson = {
  name: 'zonghuang',
  age: 18,
  eating: function() {}
}
// 这是因为TypeScript在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制。

// 但是之后如果我们是将一个 变量标识符 赋值给其他的变量时，会进行freshness擦除操作。
const obj = {
  name: 'zonghuang',
  age: 18,
  eating: function() {}
}

const p: IPerson = obj

export {}
