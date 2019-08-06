import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import withSecondComponentStyle from './withSecondComponentStyle';

const FooterSecondComponent = ({ className, dataFooter }) => (
  <div className={`footer secondComponent ${className}`}>
    <div className="footer__social-list">
      <ul>
        {map(dataFooter, (data, index) => (
          <li key={index}><h4>{data}</h4></li>
        ))}
      </ul>
    </div>

    <div className="description">
      <p>The celebrities named or featured on have not endorsed recommended or approved</p>
    </div>

    <div className="footer__social-icon">
      <img src="/images/icon/facebook_icon.svg" alt="" />
      <img src="/images/icon/twitter_icon.svg" alt="" />
      <img src="/images/icon/google_icon.svg" alt="" />
      <img src="/images/icon/instagram_icon.svg" alt="" />
    </div>
  </div>
);

FooterSecondComponent.propTypes = {
  className: PropTypes.string,
  dataFooter: PropTypes.array,
};

export default withSecondComponentStyle(FooterSecondComponent);
