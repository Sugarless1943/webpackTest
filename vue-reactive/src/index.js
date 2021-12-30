import Observe from './Observe.js'
// import defineReactive from './defineReactive'
let obj = {
    a: {
        m: 1,
        n: 2
    },
    b: 2
}

new Observe(obj)

// defineReactive(obj, 'a')

console.log(obj)
obj.a.m++
console.log(obj.a.m)
// obj.b++
// console.log(obj.b)

