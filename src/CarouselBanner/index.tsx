import { BannerWrapper } from './components/BannerWrapper';
import { BannerItem } from './components/BannerItem';
import { CarouselWrapper } from './components/CarouselWrapper';
import { CarouselItem } from './components/CarouselItem';

export const CarouselBanner = () => {
  return (
    <>
      <BannerWrapper>
        <BannerItem text={'経理'} />
        <BannerItem text={'請求書作成'} />
        <BannerItem text={'経費精算'} />
        <BannerItem text={'給与計算'} />
        <BannerItem text={'マイナンバー収集'} />
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
