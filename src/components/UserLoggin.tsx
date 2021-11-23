import React from 'react';

type UserLogginProps = {
  isLoggin: boolean;
  name: {
    first: string;
    last: string;
  };
};
const UserLoggin = (props: UserLogginProps) => {
  return (
    <>
      {props.isLoggin ? (
        <h2>
          Hi {props.name.first} {props.name.last} Welcome to Typescript
        </h2>
      ) : (
        <h3>Hi Guest</h3>
      )}
    </>
  );
};

export default UserLoggin;
