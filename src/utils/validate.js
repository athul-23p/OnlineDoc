function emptyField(data) {
  for (let prop in data) {
    if (data[prop] === '') return false;
  }
  return true;
}

function isNum(data, min = -Infinity, max = Infinity, ...fields) {
  console.log(fields);
  // for (let field of fields) {
  //   if (Number.isNaN(data[field])) {
  //     console.log(data[field]);
  //     return false;
  //   }
  // }
  // console.log('test pass');
  return true;
}

export {emptyField, isNum};
