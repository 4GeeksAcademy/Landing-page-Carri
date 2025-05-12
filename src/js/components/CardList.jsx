import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="row gx-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          <Card title='Primera tarjeta'/>
          <Card title='Segunda tarjeta'/>
          <Card title='Tercera tarjeta'/>
          <Card title='Cuarta tarjeta'/>
        </div>
      </div>
    </section>
  );
};

export default CardList;
