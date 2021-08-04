/**
 * 枚举类型
 * 
 * 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
 * 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；
 */
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log('转向左边~')
      break
    case Direction.RIGHT:
        console.log('转向右边~')
        break
    case Direction.TOP:
      console.log('转向上边~')
      break
    case Direction.BOTTOM:
      console.log('转向下边~')
      break
    default:
      const myDirection: never = direction
  }
}

/**
 * 枚举类型默认是有值的，比如上面的枚举，默认值是这样的：
 * 当然，我们也可以给枚举其他值：
 * 这个时候会从100进行递增；
 * 我们也可以给他们赋值其他的类型：
 */
enum Direction {
  LEFT = 0,
  RIGHT = 1,
  TOP = 2,
  BOTTOM = 3
}

enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM
}

enum Direction {
  LEFT,
  RIGHT,
  TOP = 'TOP',
  BOTTOM = 'BOTTOM'
}

export {}
