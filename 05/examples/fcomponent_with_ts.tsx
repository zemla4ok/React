import React from 'react';

type MyProps = {
  name: string,
  age: number
}

const MyFuncComponent: React.FC<MyProps> = (props) => {
  const {name, age} = props;
  return <>{`${name}: ${age} years`}</>
};