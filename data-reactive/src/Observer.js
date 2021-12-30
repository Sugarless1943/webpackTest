import defineReactive from "./defineReactive"
import observe from "./observe"
import { arrayMethods } from './array.js'

export default class Observer {
    constructor(obj) {
        this.walk(obj)
    }

    walk(obj) {
        for(let i in obj) {
            if(typeof obj[i] != 'object') {
                defineReactive(obj, i)
            }else if(Array.isArray(obj[i])){
                // console.log(obj[i], arrayMethods)
                Object.setPrototypeOf(obj[i], arrayMethods)
            }else{
                observe(obj[i])
            }
        }
    }
}