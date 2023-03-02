import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Ajaas',
    age: 39,
    hobby: 'Driving',
  });

  const displayPerson = () => {
    setPerson({ name: 'Afaan', age: 6, hobby: 'Cycling' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show person
      </button>
    </>
  );
};

export default UseStateObject;
