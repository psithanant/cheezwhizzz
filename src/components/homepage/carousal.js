import React from 'react'
import { Carousel } from 'react-bootstrap';
import HeroPhotoLeft from '../../assets/01-1.jpg'
import HeroPhotoCenter from '../../assets/01-2.jpg'
import HeroPhotoRight from '../../assets/01-3.jpg'


const CarouselInstance = () => {
  return (
  <Carousel>
    <Carousel.Item>
      <img width={1000} height={400} src={HeroPhotoLeft}/>
      <Carousel.Caption>
        <h1>DId Someone Say Cheese?</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={400} src={HeroPhotoCenter}/>
      <Carousel.Caption>
        <h2>Queso?</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={400} src={HeroPhotoRight}/>
      <Carousel.Caption>
        <h2>Fromage?</h2>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default CarouselInstance
