function print(message?: string) {
  console.log(message)
}

print()
print('Hello')
print(undefined)

// Argument of type 'null' is not assignable to parameter of type 'string | undefined'.
// print(null)

// 里面可以使用 , 也可使用 ; 也可以不写
type Point = {
  x: number;
  y: number
}

function printPoint(point: Point) {
  console.log(point.x, point.y);
}

function sumPoint(point: Point) {
  console.log(point.x + point.y);
}

printPoint({x: 20, y: 30})
sumPoint({x: 20, y: 30})

type ID = number | string

function printId(id: ID) {
  console.log(id);
}

function printMessage(message?: string) {
  // error TS2532: Object is possibly 'undefined'.
  // console.log(message.toUpperCase());

  console.log(message!.toUpperCase());
}

printMessage('Hello')

type Person = {
  name: string
  friend?: {
    name: string,
    age?: number,
    girlFriend?: {
      name: string
    }
  }
}

const info: Person = {
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
