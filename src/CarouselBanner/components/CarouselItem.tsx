import styled from 'styled-components';

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
  width: 75%;
`;
