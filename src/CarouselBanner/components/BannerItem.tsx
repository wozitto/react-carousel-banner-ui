import React from 'react';

type Props = {
  src?: string;
  index?: number;
};

export const BannerItem = (props: Props) => {
  return <div>{props.index}</div>;
};
