import React from 'react';
import './cars.css';

const brands = [
  {
    name: 'Tata',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80',
  },
  {
    name: 'Maruti Suzuki',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80',
  },
  {
    name: 'Mahindra',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80',
  },
  {
    name: 'Toyota',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80',
  },
  {
    name: 'Hyundai',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80',
  },
  {
    name: 'BMW',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80',
  },
  {
    name: 'Mercedes',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80',
  },
  {
    name: 'Audi',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80',
  },
  {
    name: 'Honda',
    logo: 'honda-logo.png',
  },
  {
    name: 'Ford',
    logo: 'ford-logo.jpg',
  },
  {
    name: 'Volkswagen',
    logo: 'volksvagen-logo.jpeg',
  },
  {
    name: 'Nissan',
    logo: 'https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/14/brands/logos/nissan.jpg?v=1629973277020&q=80',
  },
];

const CarBrands = () => {
  return (
    <section className="car-brands">
      <div className="logo-brands">
        {brands.map((brand, index) => (
          <div className="brand" key={index}>
            <div className="image">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <div className="brand-name">{brand.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarBrands;
