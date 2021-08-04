function foo(): string {
  return 'foo'
}

function bar(): number {
  return 123
}

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型

const flag = true
let result: unknown // 最好不要使用any

if (flag) {
  result = foo()
} else {
  result = bar()
}

let message: string = result  // Type 'unknown' is not assignable to type 'string'.
let num: number = result      // Type 'unknown' is not assignable to type 'number'.

console.log(message, num);



function loopFun(): never {
  while(true) {
    console.log('123')
  }
}

function loopErr(): never {
  throw new Error()
}

// 封装一个核心函数
function handleMessage(message: number | string | boolean) {
  switch(typeof message) {
    case 'string':
      console.log("string处理方式处理message")
      break
    case 'number':
      console.log("number处理方式处理message")
      break
    case 'boolean':
      console.log("boolean处理方式处理message")
      break
    default:
      // 去掉上三行boolean处理，check会报错
      // 'check' is declared but its value is never read. 
      // Type 'boolean' is not assignable to type 'never'.
      const check: never = message
  }
}

handleMessage("abc")
handleMessage(123)

handleMessage(true)

// 情景：程序员A封装了一个 handleMessage() 函数，只有传入number和string参数的处理代码
// 有一天，程序员B调用了 handleMessage() 函数，但他传入的是boolean类型的参数，
// 这就报错了：Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// 然后程序员B把 handleMessage(message: number | string) 改成了 handleMessage(message: number | string | boolean)
// 但是内部并没有处理参数为 boolean 时的代码，这就……
// 对于这种情况，我们可以在 default 中写检测代码，并使用 never 类型，这样就规范程序员B在handleMessage()添加处理参数为Boolean的代码


// 1.数组的弊端
const info: (string|number)[] = ['zonghuang', 18, 1.88]
const item1 = info[0] // 不能确定类型
// console.log(item1.length)  // 报错：Property 'length' does not exist on type 'string | number'. 

// 2.元组的特点
const tInfo: [string, number, number] = ['zonghuang', 18, 1.88]
const name = tInfo[0]  // zonghuang，并且知道类型是string
const age = tInfo[1]   // 18， 并且知道类型是number
console.log(name.length)
// console.log(age.length)  // 报错：Property 'length' does not exist on type 'number'.

function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }

  return [currentState, changeState]
}

useState


export {}