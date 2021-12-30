import defineReactive from './defineReactive'
import def from './utils'
export const arrayMethods = Object.create(Array.prototype)


// console.log(Array.prototype)

const methodNames = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
methodNames.forEach(item => {
    let originMethod = arrayMethods[item]
    
    def(arrayMethods, item, function() {
        console.log(this, arguments, 'this')
        originMethod.apply(this, arguments)
    }, false)
})


