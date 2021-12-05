import React from 'react';

interface Child {
  color: string;
  callback: () => void;
}

export const Child = ({ color, callback }: Child) => {
  return (
    <div>
      This is {color}
      <button onClick={callback}></button>
    </div>
  );
};

export const ChildAsFC: React.FC<Child> = ({ color, callback, children }) => {
  return (
    <div>
      This is Child React Function Component and have {color}
      <button onClick={callback}>Click</button>
      {children}
    </div>
  );
};

/*
    - Component thông thường thì để sử dụng children thì cần phải khai báo ở interface
    - React.FC thì có kiểu những kiểu như defaultsProps, children ngầm định
    - 

*/
