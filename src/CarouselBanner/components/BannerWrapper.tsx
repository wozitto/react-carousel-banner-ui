import React, { ReactElement, Fragment, Dispatch } from 'react';
import styled from 'styled-components';
import { devices } from '../../devices';
import { STORE, ACTION } from '../reducers';

type Props = {
  state?: STORE;
  dispatch?: Dispatch<ACTION>;
  children: ReactElement[];
};

export const BannerWrapper = ({ state, dispatch, children }: Props) => {
  return (
    <Wrapper>
      <Inner>
        {children.map((child, index) => {
          return (
            <Fragment key={index}>
              {React.cloneElement(child, { index: index + 1, state, dispatch })}
            </Fragment>
          );
        })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
  position: absolute;
  top: calc(100vw + 16px);
  @media ${devices.tablet} {
    height: 100px;
    top: calc(100vw * 0.562 + 28px);
    border-bottom: 1px solid #b3b3b3;
  }
  @media ${devices.desktop} {
    position: static;
  }
`;
const Inner = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media ${devices.tablet} {
    justify-content: space-between;
  }
  @media ${devices.desktop} {
    width: 70%;
  }
`;
