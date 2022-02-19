import React, { useState, useEffect, ReactElement, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type Props = {
  state: any;
  dispatch: any;
  children: ReactElement[];
};

export const CarouselWrapper = ({ state, dispatch, children }: Props) => {
  const [paused, setPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(state.activeIndex + 1);
      }
    }, 4000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    const inner = document.getElementById('inner')!;
    inner.style.transition = 'transform 0.3s';

    if (newIndex <= 0) {
      dispatch({ type: 'SET_INDEX', newIndex });
      return setTimeout(() => {
        inner.style.transition = 'none';
        dispatch({ type: 'SET_INDEX', newIndex: children.length });
      }, 200);
    } else if (newIndex - 1 >= children.length) {
      dispatch({ type: 'SET_INDEX', newIndex });
      return setTimeout(() => {
        inner.style.transition = 'none';
        dispatch({ type: 'SET_INDEX', newIndex: 1 });
      }, 200);
    }

    dispatch({ type: 'SET_INDEX', newIndex });
  };

  const handleMouseDown = (e: MouseEvent<HTMLElement>) => {
    setPaused(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setPaused(false);

    if (Math.abs(x) < 0.1) {
      updateIndex(state.activeIndex);
    } else if (x > 0.1) {
      updateIndex(state.activeIndex + 1);
    } else {
      updateIndex(state.activeIndex - 1);
    }

    setX(0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!paused) {
      return;
    }
    setX(
      Math.round(((startX - e.clientX) / document.body.clientWidth) * 100) / 100
    );
  };

  return (
    <>
      <Wrapper>
        <Inner
          id="inner"
          activeIndex={state.activeIndex + x}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          {children.at(-1)}
          {children.map((child, index) => {
            return <React.Fragment key={index}>{child}</React.Fragment>;
          })}
          {children[0]}
        </Inner>
        <PrevBtn
          onClick={() => {
            updateIndex(state.activeIndex - 1);
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </PrevBtn>
        <NextBtn
          onClick={() => {
            updateIndex(state.activeIndex + 1);
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
