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
};

export const BannerItem = (props: Props) => {
  const icons = [faChartLine, faNoteSticky, faPrint, faCalculator, faIdCard];
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

  return (
    <Item>
      <FontAwesomeIcon icon={icons[props.index!]} style={iconStyle} />
      <div>{props.text}</div>
    </Item>
  );
};

const Item = styled.div`
  text-align: center;
  width: 150px;
  height: 116px;
  opacity: .4;
`