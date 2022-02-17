import React, { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactChild[];
};

export const BannerWrapper = (props: Props) => {
  return (
    <Wrapper>
      {props.children.map((child, index) => {
        return <React.Fragment key={index}>{child}</React.Fragment>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
