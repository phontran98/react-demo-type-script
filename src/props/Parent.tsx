import React from 'react';
import { Child, ChildAsFC } from './Child';

export const Parent = () => {
  return (
    <div>
      This is parent component{' '}
      <ChildAsFC color="red" callback={() => console.log('CLICKED')}>
        HIHI
      </ChildAsFC>
    </div>
  );
};
