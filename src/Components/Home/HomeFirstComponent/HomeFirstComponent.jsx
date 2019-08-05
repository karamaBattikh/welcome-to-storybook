import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import withFirstComponentStyle from './withFirstComponentStyle';


const HomeFirstComponent = ({ className, dataOfSliderHome }) => (
  <div className={`firstContent ${className}`}>
    { map(dataOfSliderHome, (data, index) => (
      <div key={index} className="home__slider-item">
        <span><h1>{data}</h1></span>
      </div>
    ))}

    <div className="home__slider-mobile">
      <h1>{dataOfSliderHome[1]}</h1>
      <button type="button"> Show Now </button>
      <div className="slider-style">
        <ul>
          <li className="cercle-style" />
          <li className="cercle-style" />
          <li className="cercle-style" />
          <li className="cercle-style" />
        </ul>
      </div>
    </div>

  </div>
);


HomeFirstComponent.propTypes = {
  className: PropTypes.string,
  dataOfSliderHome: PropTypes.array,
};
export default withFirstComponentStyle(HomeFirstComponent);
