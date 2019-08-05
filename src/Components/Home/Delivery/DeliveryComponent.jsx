import React from 'react';
import PropTypes from 'prop-types';
import withDeliveryStyle from './withDeliveryStyle';

const DeliveryComponent = ({ className }) => (
  <div className={className}>
    <p className="delivery__title"> Free delivery worldwide </p>
    <h3 className="delivery__moreInfo">
      <a href="/"> More info </a>
    </h3>
  </div>
);

DeliveryComponent.propTypes = {
  className: PropTypes.object,
};

export default withDeliveryStyle(DeliveryComponent);
