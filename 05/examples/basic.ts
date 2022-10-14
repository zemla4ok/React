let a: number = 5;
a = 'aaaaaaa'; // error

const myObj: {a: number} = {
  a: 10
};
myObj.a = 'aaaaaaa'; // error;

const myArr: number[] = [1, 2, 3];
myArr.push('aaaaaaa'); // error;






const myFunc = (str: string, bool?: boolean, ...nums: number[]): void => {}

let b: string | number = 5;
b = 'a';