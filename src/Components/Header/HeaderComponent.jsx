import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from '../SubHeader';
import NavBar from '../NavBar';
import PubHeader from '../PubHeader';
import HeaderForMobile from './HeaderForMobile';
import withHeaderStyle from './withHeaderStyle';
import { dataOfNavBar, dataOfPubHeader, dataOfSubHeader } from '../../mockData/dataOfHeader';

const HeaderComponent = ({ className }) => (
  <div className={className}>
    <div className="desktop">
      <SubHeader dataOfSubHeader={dataOfSubHeader} />
      <NavBar dataOfNavBar={dataOfNavBar} />
    </div>
    <div className="mobile">
      <HeaderForMobile />
    </div>
    <PubHeader dataOfPubHeader={dataOfPubHeader} />
  </div>
);

HeaderComponent.propTypes = {
  className: PropTypes.string,
};

export default withHeaderStyle(HeaderComponent);
