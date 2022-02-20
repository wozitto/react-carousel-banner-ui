import styled from 'styled-components';
import { devices } from '../../devices';

type Props = {
  img: string;
};

export const CarouselItem = ({ img }: Props) => {
  return (
    <Item>
      <Inner>
        <Img src={`${window.location.origin}/${img}`} alt="" />
      </Inner>
    </Item>
  );
};

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: #fff;
  width: 100%;
`;

const Inner = styled.div`
  margin: auto;
  text-align: center;
`;

const Img = styled.img`
  pointer-events: none;
  width: 75%;
  @media ${devices.tablet} {
    width: 100%;
  }
`;
