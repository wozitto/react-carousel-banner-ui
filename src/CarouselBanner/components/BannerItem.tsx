import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faNoteSticky,
  faPrint,
  faCalculator,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  icon?: string;
  index?: number;
};

export const BannerItem = (props: Props) => {
  const icons = [faChartLine, faNoteSticky, faPrint, faCalculator, faIdCard];
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

  return <FontAwesomeIcon icon={icons[props.index!]} style={iconStyle} />;
};
