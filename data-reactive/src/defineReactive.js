export default function(obj, key, value) {
    if(arguments.length == 2) {
        value = obj[key]
    }

    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,

        get() {
            console.log(`获取属性${key}`)
            return value           
        },

        set(val) {
            console.log(`设置属性${key}`)
            value = val
        }
    })
}