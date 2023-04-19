let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

class BaseNumber {
getNumber() {};
}

class NumberBucket extends BaseNumber {
  constructor() {
  super();
  this._number = 0;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }
  getNumber() {
    return this._number;
  }
}

class PrimeBucket extends BaseNumber {
  constructor() {
    super();
    this._number = 0;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    if(isPrime(arg)) {
    this._number = arg;
    }
  }
  getNumber() {
    return this._number;
  }
}

let numbers = [];

for (let i = 0; i < dataArr.length; i++) {
  if(isPrime(dataArr[i])) {
  let obj = new PrimeBucket();
  obj.number = dataArr[i];
  numbers.push(obj);
  }
  else{
    let obj = new NumberBucket();
  obj.number = dataArr[i];
  numbers.push(obj);
  }
}

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  let objNumber = numbers[i];
  if(objNumber instanceof BaseNumber) {
    console.log(objNumber.getNumber())
  }
}
