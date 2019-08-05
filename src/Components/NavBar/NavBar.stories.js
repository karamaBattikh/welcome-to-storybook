import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

import { dataOfNavBar } from '../../mockData/dataOfHeader';
import NavBar from './NavBar';

storiesOf('NavBarComponent', module)
  .add('default', () => (
    <NavBar dataOfNavBar={dataOfNavBar} />

  ))
  .add('sans Live Component', () => {
    dataOfNavBar.Live = '';
    return (
      <NavBar dataOfNavBar={dataOfNavBar} />
    );
  })
  .add('sans Eco Component', () => {
    dataOfNavBar.Eco = '';
    return (
      <NavBar dataOfNavBar={dataOfNavBar} />
    );
  })
  .add('menu', () => {
    dataOfNavBar.Live = '';
    dataOfNavBar.Eco = '';
    return (
      <NavBar dataOfNavBar={dataOfNavBar} />
    );
  });


storiesOf('NavBarComponent Knobs', module)
  .addDecorator(withKnobs)
  .add('with dynamic variables', () => {
    const LiveInput = text('Live', 'Live Fitting Room');
    const EcoInput = text('Eco', 'Eco Friendly');
    const dataOfNavBarTest = dataOfNavBar;
    dataOfNavBarTest.Eco = EcoInput;
    dataOfNavBarTest.Live = LiveInput;

    return (
      <NavBar dataOfNavBar={dataOfNavBarTest} />
    );
  });
