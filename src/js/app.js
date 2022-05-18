export default function orderByProps(obj, keys) {
  const resultArr = [];
  const sortArr = Object.keys(obj);
  sortArr.sort();

  for (const key of keys) {
    for (let i = 0; i < sortArr.length; i += 1) {
      if (key === sortArr[i]) {
        resultArr.push({ key: sortArr[i], value: obj[sortArr[i]] });
        sortArr.splice(i, 1);
      }
    }
  }
  for (const el of sortArr) {
    resultArr.push({ key: el, value: obj[el] });
  }
  return (resultArr);
}
