// let a = 10
// for (let i = 0; i <= a; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 100)
// }

const age = 10
// age = 11 const 不能修改

let arr: number[] = [1, 2, 3, 4]
let [first, second, ...other] = arr

console.log(first, second, other)
