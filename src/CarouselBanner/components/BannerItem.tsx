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
import { devices } from '../../devices';

type Props = {
  text: string;
  index?: number;
  state?: any;
  dispatch?: any;
};

export const BannerItem = ({ text, index, state, dispatch }: Props) => {
  const icons = [faChartLine, faNoteSticky, faPrint, faCalculator, faIdCard];
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 36 };
  const active = state.activeIndex === index! + 1;

  return (
    <Item
      active={active}
      onClick={() => dispatch({ type: 'SET_INDEX', newIndex: index! + 1 })}
    >
      <Icon active={active}>
        <FontAwesomeIcon icon={icons[index!]} style={iconStyle} />
      </Icon>
      <Text>{text}</Text>
    </Item>
  );
};

const Item = styled.div<{ active: boolean }>`
  user-select: none;
  text-align: center;
  width: 145px;
  height: 96px;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  border-bottom: ${({ active }) => (active ? '4px solid #3ea8ff' : 'none')};
`;

const Icon = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? '#3ea8ff' : 'black')};
  opacity: 1;
`;

const Text = styled.div`
  color: #6e7b85;
  font-size: 16px;
  @media ${devices.tablet} {
    font-size: 14px;
  }
`;
