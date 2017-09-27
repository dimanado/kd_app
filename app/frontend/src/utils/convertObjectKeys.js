export default function convertObjectKeys(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => Object.assign(acc, {
    [fn(key)]: obj[key]
  }), {});
}
