/**
 * 函数的参数类型
 * num1: number, num2: number
 */
function greet(name: string) {
  console.log('hello' + name.toUpperCase())
}

/**
 * 函数的返回值类型
 * (): number
 * 注：在开发中，通常情况下可以不写返回值的类型(自动推导)
 */
function sum(num1: number, num2: number): number {
  return num1 + num2
}

/**
 * 匿名函数的参数
 * 上下文类型(contextual typing)：函数执行的上下文可以帮助确定参数和返回值的类型
 */
const names = ['abc', 'cba', 'nba']
// item 根据上下文的环境推导出来的，可以不添加类型注解
names.forEach(item => {
  console.log(item.toUpperCase())
})

/**
 * 对象类型
 * {x: number, y: number}
 */
function printCoordinate(point: {x: number; y: number}) {
  console.log('x坐标:', point.x)
  console.log('y坐标:', point.y)
}
printCoordinate({x: 10, y: 30})

/**
 * 可选类型
 * {x: number, y: number, z?: number}
 */
function printCoordinate1(point: {x: number; y: number, z?: number}) {
  console.log('x坐标:', point.x)
  console.log('y坐标:', point.y)
  if (point.z) {
    console.log('z坐标:', point.z)
  }
}
printCoordinate1({x: 10, y: 30})
printCoordinate1({x: 10, y: 30, z: 20})

/**
 * 联合类型
 * number | string
 * 注：使用联合类型的值时, 需要特别的小心，注意缩小联合
 */
function printId(id: number|string) {
  // narrow: 缩小
  if (typeof id === 'string') {
    // 确定id一定是string类型
    console.log(id.toUpperCase())
  } else {
    // 确定id一定是number类型
    console.log(id)
  }
}

/**
 * 可选类型和联合类型的关系
 * 可选类型可以看做是 类型 和 undefined 的联合类型
 */
function print(message?: string) {
  console.log(message)
}

print()
print('Hello')
print(undefined)

// error: Argument of type 'null' is not assignable to parameter of type 'string | undefined'.
print(null)

export {}
