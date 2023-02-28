import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Ajaas');
  const [age, setAge] = useState(39);
  const [hobby, setHobby] = useState('Driving');

  const displayPerson = () => {
    setName('Afaan');
    setAge(5);
    setHobby('Riding Bicycle');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys : {hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show person
      </button>
    </>
  );
};

export default UseStateObject;
