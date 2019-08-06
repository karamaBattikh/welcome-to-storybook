import React from 'react';
import PropTypes from 'prop-types';
import withEcoArticleStyle from './withEcoArticleStyle';
import AllArticles from './AllArticles';
import { ListOfEcoArticles } from '../../mockData/dataOfListArticles';

const ListOfDailyDeals = ({ className }) => (
  <div className={className}>
    <h2 className="eco__article-title "> Eco Friendly </h2>
    <a href="/" className="eco__article-seeAll"> see all </a>
    <AllArticles ListOfArticles={ListOfEcoArticles} />
    <div className="slider-style">
      <ul>
        <li className="cercle-style " />
        <li className="cercle-style " />
        <li className="cercle-style " />
      </ul>
    </div>
  </div>
);


ListOfDailyDeals.propTypes = {
  className: PropTypes.string,
};
export default withEcoArticleStyle(ListOfDailyDeals);
