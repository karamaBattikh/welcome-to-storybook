import React from 'react';

import { storiesOf } from '@storybook/react';
import SubHeader from './SubHeader';
import { dataOfSubHeader } from '../../mockData/dataOfHeader';

storiesOf('SubHeaderComponent', module)
  .add('default', () => (
    <SubHeader dataOfSubHeader={dataOfSubHeader} />
  ))
  .add('Story of Menu', () => {
    dataOfSubHeader.MenuOfSubHeader[2] = '';
    return (
      <SubHeader dataOfSubHeader={dataOfSubHeader} />
    );
  })
  .add('Story panier', () => {
    dataOfSubHeader.panier = '$ 1000.555';
    return (
      <SubHeader dataOfSubHeader={dataOfSubHeader} />
    );
  });
