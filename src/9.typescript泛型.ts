// 在这里使用一种特性的变量 - 类型变量（type variable），它作用于类型，而不是值：
function foo<Type>(arg: Type): Type {
  return arg
}

// 2种调用它的方式
// 方式一：通过 <类型> 的方式将类型传递给函数；
// 方式二：通过类型推到，自动推到出我们传入变量的类型
foo<string>('abc')
foo<number>(123)

foo('abc')
foo(123)

/**
 * 泛型的基本补充
 */
// 我们也可以传入多个类型
function foo<T, E>(a1: T, a2: E) {}

/*
平时在开发中我们可能会看到一些常用的名称：
T：Type的缩写，类型
K、V：key和value的缩写，键值对
E：Element的缩写，元素
O：Object的缩写，对象
*/

/**
 * 泛型接口
 * 在定义接口的时候使用泛型
 */
interface IFoo<T> {
  initialValue: T,
  valueList: T[],
  handleValue: (value: T) => void
}

const foo: IFoo<number> = {
  initialValue: 0,
  valueList: [0, 1, 2],
  handleValue: function(value: number) {
    console.log(value)
  }
}

interface IFoo<T = number> {
  initialValue: T,
  valueList: T[],
  handleValue: (value: T) => void
}

/**
 * 泛型类
 */
class Point<T> {
  x: T
  y: T

  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(10, 20)
const p2 = new Point<number>(10, 20)
const p3: Point<number> = new Point(10, 20)

/**
 * 泛型约束
 */
interface ILength {
  length: number
}

function getLength<T extends ILength>(args: T) {
  return args.length
}

console.log(getLength('abc'))
console.log(getLength(['abc', 'cba']))
console.log(getLength({length: 100, name: 'abc'}))

export {}
