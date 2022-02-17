import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement[];
};

export const BannerWrapper = (props: Props) => {
  return (
    <Wrapper>
      {props.children.map((child, index) => {
        // return <React.Fragment key={index}>{child}</React.Fragment>;
        return React.cloneElement(child, { index });
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
