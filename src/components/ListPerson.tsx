import React from 'react';

type ListPersonProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const ListPerson = (props: ListPersonProps) => {
  return (
    <>
      {props.names.map((name) => {
        return (
          <h2>
            This is {name.first} {name.last}
          </h2>
        );
      })}
    </>
  );
};

export default ListPerson;
