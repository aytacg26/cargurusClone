import React, { useState } from 'react';
import CarBodyCard from '../../../ui/BodyCard/BodyCard';
import classes from './Bodies.module.css';

const bodies = [
  {
    id: 'body-suv-0001',
    title: 'SUV/Crossover',
    image: 'https://i.ibb.co/gZSj5NM/suv-crossover-min.png',
    selected: true,
  },
  {
    id: 'body-sedan-0002',
    title: 'Sedan',
    image: 'https://i.ibb.co/r7HkJCn/sedan-min.png',
    selected: false,
  },
  {
    id: 'body-pickup-0003',
    title: 'Pickup Truck',
    image: 'https://i.ibb.co/xHpNY8W/pickup-min.png',
    selected: false,
  },
  {
    id: 'body-coupe-0004',
    title: 'Coupe',
    image: 'https://i.ibb.co/KjfmyWt/coupe-min.png',
    selected: false,
  },
  {
    id: 'body-hatchback-0005',
    title: 'Hatchback',
    image: 'https://i.ibb.co/DGm5YjL/hatchback-min.png',
    selected: false,
  },
  {
    id: 'body-convertible-0006',
    title: 'Convertible',
    image: 'https://i.ibb.co/jvbCMZz/convertible-min.png',
    selected: false,
  },
  {
    id: 'body-wagon-0007',
    title: 'Wagon',
    image: 'https://i.ibb.co/Qk477fC/wagon-min.png',
    selected: false,
  },
  {
    id: 'body-minivan-0008',
    title: 'Minivan',
    image: 'https://i.ibb.co/kHwfBS6/minivan-min.png',
    selected: false,
  },
];

const Bodies = () => {
  const [carBodies, setCarBodies] = useState(bodies);

  const handleSelect = (id) => {
    setCarBodies((prevState) => {
      return prevState.map((body) =>
        body.id === id
          ? { ...body, selected: true }
          : { ...body, selected: false }
      );
    });
    console.log(id);
  };

  return (
    <div className={classes.Bodies}>
      {carBodies.map((body) => (
        <CarBodyCard
          title={body.title}
          image={body.image}
          key={body.id}
          selected={body.selected}
          onSelect={() => handleSelect(body.id)}
        />
      ))}
    </div>
  );
};

export default Bodies;
