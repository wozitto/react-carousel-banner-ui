import React, { ReactElement, Fragment } from 'react';
import styled from 'styled-components';
import { devices } from '../../devices';

type Props = {
  state?: any;
  dispatch?: any;
  children: ReactElement[];
};

export const BannerWrapper = ({ state, dispatch, children }: Props) => {
  return (
    <Wrapper>
      <Inner>
        {children.map((child, index) => {
          return (
            <Fragment key={index}>
              {React.cloneElement(child, { index, state, dispatch })}
            </Fragment>
          );
        })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  border-bottom: 1px solid #b3b3b3;
  @media ${devices.tablet} {
    width: 100%;
    position: absolute;
    top: calc(100vw * 0.562 + 28px);
  }
  @media ${devices.mobile} {
    width: 100%;
    height: 30px;
    position: absolute;
    top: calc(100vw + 16px);
    border-bottom: none;
  }
`;
const Inner = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    width: 85%;
  }
  @media ${devices.mobile} {
    justify-content: center;
  }
`;
