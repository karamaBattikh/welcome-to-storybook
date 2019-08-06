import React from 'react';

import FooterFirstComponent from './FooterFirstComponent';
import FooterSecondComponent from './FooterSecondComponent';
import { dataOfFirstFooter, dataOfSecondFooter } from '../../mockData/dataOfFooter';

const FooterComponent = () => (
  <div>
    <FooterFirstComponent dataFooter={dataOfFirstFooter} />
    <FooterSecondComponent dataFooter={dataOfSecondFooter} />
  </div>
);

export default FooterComponent;
