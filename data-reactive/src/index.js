import observe from "./observe"

let obj = {
    a: 1,
    b: {
        m: {
            n: 2
        },
        x: 2
    },
    z: [1,2,3]
}

observe(obj)

console.log(obj)

obj.z.push(222)


// let a = [1,2]
// function fn(x, y) {
//     if(typeof x == 'function') {
//         x(a).push(y)
//     }else {
//         x.push(y)
//     }
// }


// fn(function() {
//     console.log(1)
//     // console.log(arguments)
//     console.log(this)
// }, 5)

// class MyArr {
//     val = []
//     arrayMethods = Object.create(Array.prototype)

//     constructor(arr) {
//         this.val = arr
//     }

//     push(newVal) {
//         this.arrayMethods.push.call(this.val, newVal)
//     }

//     get() {
//         return this.val
//     }
// }

// let myarr = new MyArr([2,3])

// console.log(myarr.get())

