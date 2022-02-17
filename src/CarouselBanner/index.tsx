import { BannerWrapper } from './components/BannerWrapper';
import { BannerItem } from './components/BannerItem';
import { CarouselWrapper } from './components/CarouselWrapper';
import { CarouselItem } from './components/CarouselItem';

export const CarouselBanner = () => {
  return (
    <>
      <BannerWrapper>
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
      </BannerWrapper>
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
