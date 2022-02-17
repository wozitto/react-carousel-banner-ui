import React, { useState, ReactChild } from 'react';

import styled from 'styled-components';

type Props = {
  children: ReactChild[];
};

export const CarouselWrapper = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Wrapper>
        <Inner activeIndex={activeIndex}>
          {props.children.map((child, index) => {
            return <React.Fragment key={index}>{child}</React.Fragment>;
          })}
        </Inner>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

const Inner = styled.div<{ activeIndex: number }>`
  white-space: nowrap;
  transform: ${({ activeIndex }) =>
    activeIndex ? `translateX(-${activeIndex * 100}%)` : 'none'};
`;
