const myFunc = <T>(arg: T, str: string): string => {
  return str + arg;
}

myFunc<number>(18, "age: "); // age: 18;
myFunc<boolean>(true, "success: "); // age: 18;




type Item<T> = {
  prop: T;
};

const item1: Item<number> = {prop: 42};
const item2: Item = {prop: 42}; // error
const item3: Item<string> = {prop: '42'};
const item4: Item<string> = {prop: true}; // error