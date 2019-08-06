import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import withFirstComponentStyle from './withFirstComponentStyle';

const FooterFirstComponent = ({ className, dataFooter }) => (
  <div className={`footer firstComponent ${className}`}>
    <div className="footer__about">
      {map(dataFooter, (data, index) => (
        <div key={index} className="footer__about-item">
          <p>{data.title}</p>
          <ul>
            {map(data.items, (item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))
      }
    </div>
    <div className="footer__shopping">
      <div className="footer__shopping-select">
        <p> Shipping to:</p>
        <select>
          <option> USA </option>
        </select>
      </div>
      <div className="footer__shopping-listCarte">
        <img src="/images/icon/cards_icons.png" alt="" />
      </div>
    </div>
  </div>
);

FooterFirstComponent.propTypes = {
  className: PropTypes.string,
  dataFooter: PropTypes.array,
};

export default withFirstComponentStyle(FooterFirstComponent);
