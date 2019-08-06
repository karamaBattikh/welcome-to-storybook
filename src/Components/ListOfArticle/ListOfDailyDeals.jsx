import React from 'react';
import PropTypes from 'prop-types';
import withDailyDealsStyle from './withDailyDealsStyle';
import AllArticles from './AllArticles';
import { ListOfArticles } from '../../mockData/dataOfListArticles';

const ListOfDailyDeals = ({ className }) => (
  <div className={className}>
    <p className="daily__deals-title"> Daily Deals </p>

    <div className="daily__deals-navigation">
      <a href="/"> Featured </a>
      <a href="/"> Jeans </a>
      <a href="/"> Pants </a>
      <a href="/"> Shorts </a>
      <a href="/"> Tops </a>
      <a href="/"> Outerwear </a>
      <a href="/"> accessories </a>
      <a href="/"> Collaborations </a>
    </div>

    <AllArticles ListOfArticles={ListOfArticles} />

    <div className="daily__deals-moreInfo">
      <a href="/">More Deals </a>

      <div className="slider-style">
        <ul>
          <li className="cercle-style " />
          <li className="cercle-style " />
          <li className="cercle-style " />
          <li className="cercle-style " />
          <li className="cercle-style " />
        </ul>
      </div>
    </div>
  </div>
);

ListOfDailyDeals.propTypes = {
  className: PropTypes.string,
};
export default withDailyDealsStyle(ListOfDailyDeals);
