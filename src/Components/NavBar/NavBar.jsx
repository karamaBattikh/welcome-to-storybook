import React from 'react';
import PropTypes from 'prop-types';
import { map, split } from 'lodash';
import withNavBarStyle from './withNavBarStyle';

const NavBar = ({ className, dataOfNavBar }) => {
  const { MenuOfNavBar, Live, Eco } = dataOfNavBar;

  const LiveComponent = Live !== ' ' ? (
    <div className="header__navbar-live">
      <a href="/">{Live}</a>
    </div>
  ) : '';

  const EcoWords = split(Eco, ' ');
  const EcoComponent = Eco !== '' ? (
    <div className="header__navbar-eco">
      <a href="/">
        <p>{EcoWords[0]}</p>
        <p>{EcoWords[1]}</p>
      </a>
    </div>
  ) : '';

  return (
    <div className={className}>
      <div className="header__navbar-logo">
        <img src="/images/logo2.PNG" alt="" />
      </div>

      <div className="header__navbar-menu ">
        <ul className="menuNavbar">
          {map(MenuOfNavBar, (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {LiveComponent}

      {EcoComponent}

      <div className="header__navbar-search">
        <a href="/">
          <img src="/images/icon/search_icon.svg " alt="" />
        </a>
      </div>

    </div>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  dataOfNavBar: PropTypes.object,
};

export default withNavBarStyle(NavBar);
