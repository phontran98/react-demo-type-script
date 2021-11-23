import React from 'react';

type PersonProps = {
  first: string;
  last: string;
};

const Person = (props: PersonProps) => {
  return (
    <h2>
      Welcome to {props.first} {props.last}
    </h2>
  );
};

export default Person;
