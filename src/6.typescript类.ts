/**
 * 类的定义、类的继承、类的成员修饰符、只读属性readonly
 */
class Person {
  protected name!: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  running() {
    console.log(this.name + ' running')
  }

  eating() {
    console.log(this.name + ' eating')
  }
}

class Student extends Person {
  readonly sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log(this.name + ' studying')
  }

  running() {
    super.running()
    console.log('student running')
  }
}

class Teacher extends Person {
  title: string = ''

  teaching() {
    console.log(' teaching')
  }
}

const student = new Student('zonghuang', 18, 1)
console.log(student)  // Student { name: 'zonghuang', age: 18, sno: 1 }
student.eating()      // zonghuang eating
student.running()     // zonghuang running  student running

// Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// console.log(student.name)

// error: Property 'age' is private and only accessible within class 'Person'.
// console.log(student.age)

// Cannot assign to 'sno' because it is a read-only property.
// student.sno = 123

/**
 * getters/setters
 * 
 * 在前面一些私有属性我们是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，这个时候我们可以使用存取器。
 */
class Person1 {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  set name(newName) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const p = new Person1('huang')
p.name = 'zonghuang'
console.log(p.name) // zonghuang

/**
 * 静态成员
 * 
 * 前面我们在类中定义的成员和方法都属于对象级别的, 在开发中, 我们有时候也需要定义类级别的成员和方法。
 */
class Student1 {
  static time: string = '20:00'

  static attendClass() {
    console.log('去上课')
  }
}

console.log(Student1.time)  // 20:00
Student1.attendClass()      // 去上课

/**
 * 抽象类abstract
 * 
 * 继承是多态使用的前提
 * 所以在定义很多通用的调用接口时, 我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式。
 * 但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，我们可以定义为抽象方法。
 * 
 * 抽象类的特点：
 * 1.抽象类是不能被实例的话（也就是不能通过new创建）
 * 2.抽象方法必须被子类实现，否则该类必须是一个抽象类
 * 
 * 什么是抽象方法？
 * 在TypeScript中没有具体实现的方法(没有方法体)，就是抽象方法。
 * 抽象方法，必须存在于抽象类中；
 * 抽象类是使用abstract声明的类；
 */
abstract class Shape {
  abstract getArea(): number
}

class Circle extends Shape {
  private r: number

  constructor(r: number){
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

const circle = new Circle(10)
const rectangle = new Rectangle(20, 30)

function calcArea(shape: Shape) {
  console.log(shape.getArea())
}

calcArea(circle)    // 314
calcArea(rectangle) // 600

/**
 * 类的类型
 * 类本身也是可以作为一种数据类型的
 */
class Person2 {
  name: string

  constructor(name: string) {
    this.name = name
  }

  running() {
    console.log(this.name + ' running')
  }
}

const person1: Person2 = new Person2('zonghuang')
const person2: Person2 = {
  name: 'kobe',
  running: function() {
    console.log(this.name + ' running')
  }
}
console.log(person1)  // Person2 { name: 'zonghuang' }
console.log(person2)  // { name: 'kobe', running: [Function: running] }

/**
 * 类的多态
 * 
 * 多态的目的是为了写出更加具备通用性的代码
 */
class Animal {
  action() {
    console.log("animal action")
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running!!!")
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming")
  }
}

// animal: dog/fish
function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action()
  })
}

makeActions([new Dog(), new Fish()])  // dog running!!!    fish swimming

export {}
