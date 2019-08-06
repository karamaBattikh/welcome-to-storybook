import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import withPubHeaderStyle from './withPubHeaderStyle';


const PubHeader = ({ className, dataOfPubHeader }) => (
  <div className={className}>
    { map(dataOfPubHeader, (pub, index) => (
      <div className="header__pub-item" key={index}>
        <a href="/">
          <span>{pub.count}</span>
          {pub.label}
        </a>
      </div>
    ))}
  </div>
);

PubHeader.propTypes = {
  className: PropTypes.string,
  dataOfPubHeader: PropTypes.array,
};

export default withPubHeaderStyle(PubHeader);
