import React, { useEffect, useRef, useState } from 'react';

interface UserSearch {
  name: string;
  age: number;
}

const users: UserSearch[] = [
  {
    name: 'Phon',
    age: 20,
  },
  {
    name: 'Pin',
    age: 20,
  },
];
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<UserSearch | undefined>();

  const onClick = () => {
    const findUser = users.find((user) => user.name === name);
    if (findUser) {
      setUser(findUser);
    }
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <h3>User : {user && user.name}</h3>
    </div>
  );
};

export default UserSearch;
