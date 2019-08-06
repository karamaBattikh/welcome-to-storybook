import React from 'react';

import { storiesOf } from '@storybook/react';
import HomeSecondComponent from './HomeSecondComponent';

storiesOf('SecondComponentHome', module)
  .add('default', () => (
    <HomeSecondComponent />
  ));
