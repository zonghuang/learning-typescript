// 函数的参数类型

// 参数的类型注解
function greet(name: string) {
  console.log('hello' + name.toUpperCase())
}

greet('zonghuang')

// greet(123)  // Argument of type 'number' is not assignable to parameter of type 'string'.
// greet('Li', 'zonghuang')  // Expected 1 arguments, but got 2.

// 函数的返回值类型
// 返回值的类型注解
// 在开发中，通常情况下可以不写返回值的类型(自动推导)
function sum(num1: number, num2: number): number {
  return num1 + num2
}

// 匿名函数的参数
// 上下文类型(contextual typing)：函数执行的上下文可以帮助确定参数和返回值的类型
const names = ['abc', 'cba', 'nba']
// TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型
// item根据上下文的环境推导出来的, 这个时候可以不添加的类型注解
// 上下文中的函数: 可以不添加类型注解
names.forEach(item => {
  console.log(item.toUpperCase());
})

// 函数参数是对象类型
function printCoordinate(point: {x: number; y: number}) {
  console.log('x坐标:', point.x);
  console.log('y坐标:', point.y);
}
printCoordinate({x: 10, y: 30})

// 可选类型