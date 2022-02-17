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
        <CarouselItem img={'carousel_1.jpg'} />
        <CarouselItem img={'carousel_2.jpg'} />
        <CarouselItem img={'carousel_3.jpg'} />
        <CarouselItem img={'carousel_4.jpg'} />
        <CarouselItem img={'carousel_5.jpg'} />
      </CarouselWrapper>
    </>
  );
};
