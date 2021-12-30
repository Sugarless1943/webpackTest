export default function (obj, key, value) {
    if (arguments.length == 2) {
        value = obj[key]
    }

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`get ${key} 属性`)
            return value
        },
        set(newVal) {
            console.log(`set ${key} 属性`)
            value = newVal
        }
    })
}