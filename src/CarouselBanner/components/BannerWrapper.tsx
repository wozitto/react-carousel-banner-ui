import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement[];
};

export const BannerWrapper = (props: Props) => {
  return (
    <Wrapper>
      <Inner>
        {props.children.map((child, index) => {
          // return <React.Fragment key={index}>{child}</React.Fragment>;
          return React.cloneElement(child, { index });
        })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 105px;
  margin-bottom: 50px;
  border-bottom: 1px solid #b3b3b3;
`;
const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
