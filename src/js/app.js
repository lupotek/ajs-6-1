export default function orderByProps(obj, [key1, key2]) {
  const resultArr = [];
  for (const prop in obj) {
    if (prop === key1 || prop === key2) {
      resultArr.push({ key: prop, value: obj[prop] });
      delete obj[prop];
    }
  }
  const sortedArr = Object.entries(obj).sort();
  for (const el of sortedArr) {
    resultArr.push({ key: el[0], value: el[1] });
  }
  return resultArr;
}
