import { CarouselWrapper } from './components/CarouselWrapper';
import { CarouselItem } from './components/CarouselItem';

export const CarouselBanner = () => {
  return (
    <>
      <CarouselWrapper>
        <CarouselItem text="Item 1" />
        <CarouselItem text="Item 2" />
        <CarouselItem text="Item 3" />
        <CarouselItem text="Item 4" />
        <CarouselItem text="Item 5" />
      </CarouselWrapper>
    </>
  );
};
