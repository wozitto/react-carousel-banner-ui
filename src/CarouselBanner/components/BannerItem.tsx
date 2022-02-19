import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faNoteSticky,
  faPrint,
  faCalculator,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  text: string;
  index?: number;
  count?: number
};

export const BannerItem = ({ text, index, count }: Props) => {
  const icons = [faChartLine, faNoteSticky, faPrint, faCalculator, faIdCard];
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 36 };

  return (
    <Item>
      <FontAwesomeIcon icon={icons[index!]} style={iconStyle} />
      <div>{text}</div>
    </Item>
  );
};

const Item = styled.div`
  text-align: center;
  width: 150px;
  height: 101px;
  opacity: 0.4;
`;
