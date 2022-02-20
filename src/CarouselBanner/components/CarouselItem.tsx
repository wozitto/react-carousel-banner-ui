import styled from 'styled-components';
import { devices } from '../../devices';

type Props = {
  index?: number;
};

export const CarouselItem = ({ index }: Props) => {
  const isMobile = document.body.clientWidth < 768;
  const img = isMobile
    ? `carousel_sp${index ? index + 1 : 1}.jpg`
    : `carousel_pc${index ? index + 1 : 1}.jpg`;

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
  width: 100vw;
  @media ${devices.desktop} {
    width: 72vw;
  }
`;
