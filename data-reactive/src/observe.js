import Observer from "./Observer"
export default function(obj) {
    if(!obj.__ob__) obj.__ob__ = new Observer(obj)
}