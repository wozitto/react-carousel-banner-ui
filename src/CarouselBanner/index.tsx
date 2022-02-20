import React, { useReducer } from 'react';
import { BannerWrapper } from './components/BannerWrapper';
import { BannerItem } from './components/BannerItem';
import { CarouselWrapper } from './components/CarouselWrapper';
import { CarouselItem } from './components/CarouselItem';
import { reducer } from './reducers';

export const CarouselBanner = () => {
  const initialState = { activeIndex: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BannerWrapper state={state} dispatch={dispatch}>
        <BannerItem text={'経理'} />
        <BannerItem text={'請求書作成'} />
        <BannerItem text={'経費精算'} />
        <BannerItem text={'給与計算'} />
        <BannerItem text={'マイナンバー収集'} />
      </BannerWrapper>
      <CarouselWrapper state={state} dispatch={dispatch}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </CarouselWrapper>
    </>
  );
};
