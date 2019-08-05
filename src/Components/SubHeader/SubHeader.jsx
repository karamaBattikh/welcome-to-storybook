import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import withSubHeaderStyle from './withSubHeaderStyle';

const SubHeader = ({ className, dataOfSubHeader }) => {
  const { MenuOfSubHeader, profil, panier } = dataOfSubHeader;
  return (
    <div className={className}>
      <select>
        <option> usa </option>
      </select>

      <div className="header__compte-menu">
        { map(MenuOfSubHeader, (item, index) => (
          <a href="/#" key={index} className="item ">
            {item}
          </a>
        ))}
      </div>

      <div className="header__compte-login">
        <span>
          <img src="/images/icon/user_icon.svg" alt="" />
          {profil}
        </span>
      </div>

      <div className="header__compte-panier">
        <span>
          <img src="/images/icon/panier_icon.svg" alt="" />
          {panier}
        </span>
      </div>

    </div>
  );
};

SubHeader.propTypes = {
  className: PropTypes.string,
  dataOfSubHeader: PropTypes.object,
};

export default withSubHeaderStyle(SubHeader);
