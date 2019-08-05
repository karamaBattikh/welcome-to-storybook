import React from 'react';
import PropTypes from 'prop-types';
import withHeaderMobileStyle from './withHeaderMobileStyle';

const HeaderForMobile = ({ className }) => (
  <div className={className}>
    <div className="NavBar">
      <div className="menu">
        <div className="first-bar" />
        <div className="second-bar" />
        <div className="thrid-bar" />
      </div>
      <div className="searchIcon">
        <img src="/images/icon/search_icon.svg " alt="" />
      </div>

      <div className="logoIcon">
        <img src="/images/logo.PNG" alt="" />
      </div>

      <div className="profilIcon">
        <img src="/images/icon/user_icon.svg" alt="" />
      </div>

      <div className="panierIcon">
        <img src="/images/icon/panier_icon.svg" alt="" />
      </div>
    </div>
  </div>
);

HeaderForMobile.propTypes = {
  className: PropTypes.string,
};

export default withHeaderMobileStyle(HeaderForMobile);
