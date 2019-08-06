import React from 'react';

import { storiesOf } from '@storybook/react';
import { dataOfSliderHome } from '../../../mockData/dataOfHomeContent';
import HomeFirstComponent from './HomeFirstComponent';

const dataOfSliderHomeTest = dataOfSliderHome;

storiesOf('FisrtContentOfHome', module)
  .add('default', () => (
    <HomeFirstComponent dataOfSliderHome={dataOfSliderHome} />
  ))
  .add('slider with 5 items', () => {
    const dataOfSliderHome2 = ['a', 'a', 'r', 'r', 'r'];
    return (
      <HomeFirstComponent dataOfSliderHome={dataOfSliderHome2} />
    );
  })
  .add('slider with 3 items', () => (
    <HomeFirstComponent dataOfSliderHome={dataOfSliderHomeTest.splice(0, 3)} />
  ));
