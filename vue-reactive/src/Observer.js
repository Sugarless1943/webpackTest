import defineReactive from "./defineReactive";
import Observe from "./Observe";

export default class Observer {
    constructor(obj) {
        this.walk(obj)
    }

    walk() {
        for(let i in obj) {
            if(typeof obj[i] != 'object') {
                defineReactive(obj, i)
            }else {
                Observe(obj[i])
            }
        }
    }
}