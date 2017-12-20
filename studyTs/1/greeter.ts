class Student {
  fullName: string
  constructor (public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter (person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'User')

document.body.innerHTML = greeter(user)

let isDone: boolean = false

// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

enum Color {red = 1, green = 2, blue = 3}
let c:Color = Color.green
let colorName: string = Color[2]
console.log(c, colorName)

// Any  代表不确定类型
let notSure: any = 4
notSure = false
console.log(notSure)

// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

function error(message: string): never {
  throw new Error(message)
}

error('test nerver')
