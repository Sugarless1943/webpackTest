export default function(obj, key, value, enumerable) {
    // console.log(value, 'arguments')
    Object.defineProperty(obj, key, {
        value,
        enumerable,
        writable: true,
        configurable: true
    })
}