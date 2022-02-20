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
  const isMobile = document.body.clientWidth < 768;
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 36 };
  const active = index ? state.activeIndex === index : false;

  return (
    <Item
      active={active}
      onClick={() =>
        dispatch({
          type: 'SET_INDEX',
          newIndex: index ? index : state.activeIndex,
        })
      }
    >
      {!isMobile && (
        <Icon active={active}>
          <FontAwesomeIcon
            icon={index ? icons[index-1] : icons[0]}
            style={iconStyle}
          />
        </Icon>
      )}
      {!isMobile && <Text>{text}</Text>}
    </Item>
  );
};

const Item = styled.div<{ active: boolean }>`
  user-select: none;
  width: 8px;
  height: 8px;
  border: 2px solid #3ea8ff;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#3ea8ff' : '#fff')};
  margin-right: 3px;
  @media ${devices.tablet} {
    margin: 0;
    text-align: center;
    width: 145px;
    height: 96px;
    opacity: ${({ active }) => (active ? 1 : 0.4)};
    background-color: #fff;
    border: none;
    border-radius: 0;
    border-bottom: ${({ active }) => (active ? '4px solid #3ea8ff' : 'none')};
  }
`;

const Icon = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? '#3ea8ff' : 'black')};
  opacity: 1;
`;

const Text = styled.div`
  color: #6e7b85;
  font-size: 14px;
  @media ${devices.desktop} {
    font-size: 16px;
  }
`;
