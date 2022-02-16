import styled from 'styled-components';

type Props = {
  children: string;
};

export const Carousel = (props: Props) => {
  return <Item>{props.children}</Item>;
};

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: green;
  user-select: none;
  color: #fff;
  width: 100%;
`;
