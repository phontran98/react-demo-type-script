import React from 'react';
import Person from './components/Person';
import MyPerson from './components/MyPerson';
import ListPerson from './components/ListPerson';
import UserLoggin from './components/UserLoggin';

const App = () => {
  const name = {
    first: 'Trần Ty',
    last: 'Phon',
  };
  const names = [
    {
      first: 'Trần Ty',
      last: 'Phon',
    },
    {
      first: 'Trần Ty',
      last: 'Pin',
    },
  ];
  const isLoggin = false;

  return (
    <>
      <Person first="Trần" last="Phon" />
      <MyPerson name={name} />
      <ListPerson names={names} />
      <UserLoggin isLoggin={isLoggin} name={name} />
    </>
  );
};

export default App;
