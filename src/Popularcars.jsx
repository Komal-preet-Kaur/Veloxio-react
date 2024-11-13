import React from 'react';
import './cars.css';

const cars = [
  {
    name: 'Mercedes-Benz',
    description: 'Luxury and performance in one package.',
    image: 'Merc-benz-Gclass.jpg',
    link: 'Mercedes.html',
  },
  {
    name: 'Porsche',
    description: 'The ultimate driving machine.',
    image: 'porsche.jpg',
    link: 'porche.html',
  },
  {
    name: 'Audi',
    description: 'Progress through technology.',
    image: 'audi.jpg',
    link: 'audi.html',
  },
  {
    name: 'Tesla',
    description: 'Electric power, unmatched performance.',
    image: 'kia.jpg',
    link: 'tesla.html',
  },
  {
    name: 'Lamborghini',
    description: 'Super sports car for the bold.',
    image: 'lamborgihni.png',
    link: 'lamborghini.html',
  },
  {
    name: 'Ferrari',
    description: 'Exquisite design, exhilarating speed.',
    image: 'super-car-ferrari.jpg',
    link: 'ferrari.html',
  },
];

const PopularCars = () => {
  return (
    <section className="cars-showcase">
      <h1 className="large-font">Popular New Cars</h1>
      <div className="car-container">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="car-info">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <button className="buy-now">
                <a href={car.link}>Find Details</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
