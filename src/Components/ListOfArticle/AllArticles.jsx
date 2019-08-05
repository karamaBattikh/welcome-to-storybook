import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import withAllArticleStyle from './withAllArticleStyle';
import CartComponent from './ArticleComponent';

const AllArticles = ({ ListOfArticles, className }) => (
  <div className={className}>
    {map(ListOfArticles, (article, index) => (
      <CartComponent article={article} key={index} />
    ))}
  </div>
);

AllArticles.propTypes = {
  className: PropTypes.string,
  ListOfArticles: PropTypes.array,
};

export default withAllArticleStyle(AllArticles);
