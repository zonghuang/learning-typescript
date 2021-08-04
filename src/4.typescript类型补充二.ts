/**
 * 类型别名
 */
// 里面可以使用 , 也可使用 ; 也可以不写
type Point = {
  x: number;
  y: number
}

function printPoint(point: Point) {
  console.log(point.x, point.y)
}

function sumPoint(point: Point) {
  console.log(point.x + point.y)
}

printPoint({x: 20, y: 30})
sumPoint({x: 20, y: 30})

// 示例二
/*
type ID = number | string

function printId(id: ID) {
  console.log(id);
}
*/


/**
 * 类型断言as
 * 
 * 有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions）。
 * 比如我们通过 document.getElementById，TypeScript只知道该函数会返回 HTMLElement ，但并不知道它具体的类型
 */
const myEl = document.getElementById('myImg') as HTMLImageElement;
myEl.src = '图片地址'

// 示例二
class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)

// 示例三
const message = "Hello World"
const num: number = (message as unknown) as number
// TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换

/**
 * 非空类型断言!
 * 非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测
 */
function printMessage(message?: string) {
  console.log(message.toUpperCase());  // error TS2532: Object is possibly 'undefined'.
  console.log(message!.toUpperCase());
}
printMessage('Hello')

/**
 * 可选链
 * 当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行
 */
type Person1 = {
  name: string
  friend?: {
    name: string,
    age?: number,
    girlFriend?: {
      name: string
    }
  }
}

const info: Person1 = {
  name: 'zonghuang',
  friend: {
    name: 'kobe',
    girlFriend: {
      name: 'lily'
    }
  }
}

console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);

/**
 * ??和!!
 * 
 * 空值合并操作符（??）是一个逻辑操作符。当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数
 * 
 * 操作符（!!） 将一个其他类型转换成boolean类型；类似于Boolean(变量)的方式。
 */
// ??
const message1 = '321'
const result = message1 ?? '123'  // 321
// 注：操作符左侧是 '' 或 0 或 '0' 或 false，都是取左侧的值

// !!
const message2 = ''
let flag1 = Boolean(message2)  // false
let flag2 = !!message2  // false

/**
 * 字面量类型(literal types)
 */
let message3: 'Hello World' = 'Hello World'
message3 = '你好啊，李银河'  // error: Type '"你好啊，李银河"' is not assignable to type '"Hello World"'.

type Alignment = 'left' | 'right' | 'center'
function changeAlign(align: Alignment) {
  console.log('修改方向:', align);
}
changeAlign('left')

/**
 * 字面量推理
 */
const info1 = {
  url: 'https://example.com',
  method: 'GET'
}

function request(url: string, method: 'GET' | 'POST') {
  console.log(url, method);
}

// error: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
request(info1.url, info1.method)

// 报错原因分析：这是因为我们的对象再进行字面量推理的时候，info其实是一个 {url: string, method: string}，所以我们没办法将一个 string 赋值给一个 字面量 类型。

// 解决方案一
request(info1.url, info1.method as "GET")

// 解决方案二
const info2 = {
  url: 'https://example.com',
  method: 'GET'
} as const
request(info2.url, info2.method)

/**
 * 类型缩小(Type Narrowing)
 * 作用：类型保护
 */

/**
 * 类型缩小 typeof
 */
type ID = number | string

function printId(id: ID) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

/**
 * 类型缩小 平等缩小
 * 使用Switch或者相等的一些运算符来表达相等性（比如===, !==, ==, and != ）
 */
type Direction = 'left' | 'right' | 'center'

function turnDirection(direction: Direction) {
  switch (direction) {
    case 'left':
      console.log('调用left方法');
      break;
    case 'right':
      console.log('调用right方法');
      break;
    case 'center':
      console.log('调用center方法');
      break;
    default:
      console.log('调用默认方法');
  }
}

/**
 * 类型缩小 instanceof
 */
function printValue(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toLocaleString())
  } else {
    console.log(date)
  }
}

/**
 * 类型缩小 in
 * 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true
 */
type Fish = {swim: () => void}
type Dog = {run: () => void}

function move(animal: Fish | Dog) {
  if ('swim' in animal) {
    animal.swim()
  } else {
    animal.run()
  }
}

export {}
