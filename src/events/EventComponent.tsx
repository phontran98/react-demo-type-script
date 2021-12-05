import React, { useState } from 'react';

const EventComponent: React.FC = () => {
  const [name, setName] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <div draggable onDragStart={handleDragStart}>
        DRAG
      </div>
    </>
  );
};

export default EventComponent;
