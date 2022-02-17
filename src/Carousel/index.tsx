import { CarouselWrapper } from './components/CarouselWrapper';
import { CarouselItem } from './components/CarouselItem';

export const Carousel = () => {
  return (
    <CarouselWrapper>
      <CarouselItem text="Item 1" />
      <CarouselItem text="Item 2" />
      <CarouselItem text="Item 3" />
    </CarouselWrapper>
  );
};
