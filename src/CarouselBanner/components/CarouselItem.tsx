import styled from 'styled-components';

type Props = {
  text: string;
};

export const CarouselItem = (props: Props) => {
  return <Item>{props.text}</Item>;
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
