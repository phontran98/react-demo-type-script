import React from 'react';
type MyPersonProps = {
  name: {
    first: string;
    last: string;
  };
};
const MyPerson = (props: MyPersonProps) => {
  return (
    <>
      <h2>
        My Name is {props.name.first} {props.name.last}
      </h2>
    </>
  );
};

export default MyPerson;
