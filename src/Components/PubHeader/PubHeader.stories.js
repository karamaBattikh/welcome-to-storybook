import React from 'react';

import { storiesOf } from '@storybook/react';

import PubHeader from './PubHeader';
import { dataOfPubHeader } from '../../mockData/dataOfHeader';

storiesOf('PubHeaderComponent', module)
  .add('default', () => (
    <PubHeader dataOfPubHeader={dataOfPubHeader} />
  ));
