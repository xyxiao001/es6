// 接口
// 普通的一个例子
{
  let printLabel = (labelledObj: {label: string}) => {
    console.log(labelledObj.label)
  }

  let myObj = {
    size: 10,
    label: 'Size 10 Object'
  }

  printLabel(myObj)
}

// 接口方式
{
  interface LabeledValue {
    label: string
  }

  let printLabel = (labelledObj: LabeledValue) => {
    console.log(labelledObj.label)
  }

  let myObj = {
    size: 10,
    label: 'Size 10 Object'
  }

  printLabel(myObj)
}

{
  interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any
    // 表示可以有其他属性
  }

  let createSquare = (config: SquareConfig) : {
    color: string;
    area: number
  } => {
    let newSquare = {
      color: 'white',
      area: 100
    }
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    return newSquare
  }

  let mySquare = createSquare({
    color: 'black',
    width: 30
  })

  console.log(mySquare)
}

{
  interface Point {
    readonly x: number
    readonly y: number
  }
  // 只读 不可修改

  let p1: Point = {
    x: 10,
    y: 20
  }
  // p1.x = 5 error
}

{
  interface SearchFunc {
    (source: string, substring: string): boolean
  }

  let search: SearchFunc = (source: string, substring: string) => {
    let result = source.search(substring)
    return result > -1
  }

  console.log(search('sha', 's'))
  console.log(search('sha', 'x'))
}

{
  interface StringArray {
    [index: number]: string
  }

  let arr: StringArray = ['bob', 'fred']

  let s: string = arr[0]

  console.log(s)
}
