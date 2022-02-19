import React, { ReactElement } from 'react';
import styled from 'styled-components';

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
          return React.cloneElement(child, { index, state, dispatch });
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
`;
const Inner = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
