import React from 'react';
import PropTypes from 'prop-types';
import HomeFirstComponent from '../HomeFirstComponent/HomeFirstComponent';
import HomeSecondComponent from '../HomeSecondComponent';
import DeliveryComponent from '../Delivery';
import HomeThirdComponent from '../HomeThirdComponent';
import withHomeStyle from './withHomeStyle';
import ListOfDailyDeals from '../../ListOfArticle/ListOfDailyDeals';
import ListOfEcoArticle from '../../ListOfArticle/ListOfEcoArticle';

import { dataOfSliderHome, dataOfNews } from '../../../mockData/dataOfHomeContent';

const AbountText = 'Online shop for unique, stylish lifestyle clothing.We are passionate about eco fashion, and every season sees us gathering around the drawing board at seaside to develop the exciting patterns, prints and styles you can see in our current collections. We look to places, color, animals for our inspiration.';

const HomeComponent = ({ className }) => (
  <div className={className}>
    <HomeFirstComponent dataOfSliderHome={dataOfSliderHome} />
    <HomeSecondComponent />
    <DeliveryComponent />
    <ListOfDailyDeals />
    <ListOfEcoArticle />
    <HomeThirdComponent news={dataOfNews} />

    <div className="homeContent__footer-about">
      <p className="title"> About Dink </p>

      <p className="description">
        {AbountText}
      </p>
      <p className="moreInfo"><a href="/"> More Info </a></p>
      <button type="button" className="moreInfo-mobile"> More </button>

    </div>
  </div>
);

HomeComponent.propTypes = {
  className: PropTypes.string,
};

export default withHomeStyle(HomeComponent);
