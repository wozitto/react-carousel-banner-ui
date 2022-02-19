import React, { useState, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { PREV_EVENT, NEXT_EVENT } from '../actions';

import styled from 'styled-components';

type Props = {
  state: any;
  dispatch: any;
  children: ReactElement[];
};

export const CarouselWrapper = ({ state, dispatch, children }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Wrapper>
        <Inner activeIndex={state.activeIndex}>
          {children.map((child, index) => {
            return <React.Fragment key={index}>{child}</React.Fragment>;
          })}
        </Inner>
        <PrevBtn>
          <FontAwesomeIcon icon={faAngleLeft} />
        </PrevBtn>
        <NextBtn
          onClick={() => {
            dispatch({ type: 'NEXT_EVENT' });
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </NextBtn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Inner = styled.div<{ activeIndex: number }>`
  white-space: nowrap;
  transform: ${({ activeIndex }) =>
    activeIndex ? `translateX(-${activeIndex * 100}%)` : 'none'};
  transition: transform 0.3s;
`;

const PrevBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  text-align: center;
  font-size: 16px;
  line-height: 32px;
  color: blue;
  border: 2px solid blue;
  border-radius: 50%;
`;

const NextBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  text-align: center;
  font-size: 16px;
  line-height: 32px;
  color: blue;
  border: 2px solid blue;
  border-radius: 50%;
`;
