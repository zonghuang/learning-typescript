/**
 * any 类型
 * 可以对 any 类型的变量进行任何的操作，包括获取不存在的属性、方法
 */
let a: any = 'zonghuang'
a = 123
a = true
const b: any[] = [1, 2]

/**
 * unknown 类型
 */
function foo(): string {
  return 'foo'
}

function bar(): number {
  return 123
}

const flag = true
let result: unknown // 最好不要使用any

if (flag) {
  result = foo()
} else {
  result = bar()
}

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
let message: string = result  // error: Type 'unknown' is not assignable to type 'string'.
let num: number = result      // error: Type 'unknown' is not assignable to type 'number'.

/**
 * void 类型
 * 指定一个函数是没有返回值
 * 我们可以将 null 和 undefined 赋值给 void 类型，也就是函数
 */
// 默认返回值的类型就是 void
function sum1(num1: number, num2: number) {
  console.log(num1 + num2)
}

// 也可以显示的来指定返回值是 void
function sum2(num1: number, num2: number): void {
  console.log(num1 + num2)
}

/**
 * never 类型
 * 表示永远不会发生值的类型
 */
function loopFun(): never {
  while(true) {
    console.log('123')
  }
}

function loopErr(): never {
  throw new Error()
}

function handleMessage(message: number | string | boolean) {
  switch(typeof message) {
    case 'string':
      console.log("string处理方式处理message")
      break
    case 'number':
      console.log("number处理方式处理message")
      break
    // case 'boolean':
    //   console.log("boolean处理方式处理message")
    //   break
    default:
      // 去掉上三行boolean处理，check会报错
      // error: 'check' is declared but its value is never read. 
      // error: Type 'boolean' is not assignable to type 'never'.
      const check: never = message
  }
}

handleMessage("abc")
handleMessage(123)
handleMessage(true)

/**
 * tuple 类型
 */
// 1.数组的弊端
const info: (string|number)[] = ['zonghuang', 18, 1.88]
const item1 = info[0]     // 不能确定类型
console.log(item1.length) // error: Property 'length' does not exist on type 'string | number'. 

// 2.元组的特点
const tInfo: [string, number, number] = ['zonghuang', 18, 1.88]
const name = tInfo[0] // zonghuang，并且知道类型是string
const age = tInfo[1]  // 18， 并且知道类型是number
console.log(name.length)
console.log(age.length) // error: Property 'length' does not exist on type 'number'.

/**
 * tuple 的应用场景
 */
// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}
function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }

  return [currentState, changeState]
}

/*
// 版本一：未优化的
function useState(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
  }

  const tuple: [any, (newState: any) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)

const [title, setTitle] = useState("abc")
*/

/*
// 版本二：已优化的
function useState<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const info: [string, number] = ["abc", 18]
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)
const [title, setTitle] = useState("abc")
const [flag, setFlag] = useState(true)
*/

export {}
