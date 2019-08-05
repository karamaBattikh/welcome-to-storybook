import React from 'react';
import PropTypes from 'prop-types';

import withArticleStyle from './withArticleStyle';

const CartComponent = ({ className, article }) => {
  const NewComponent = article.new ? <span className="cart__new"> New </span> : '';

  const SoldComponent = article.sold ? (
    <span className="cart__solde">{article.sold}</span>
  ) : '';

  const DiscountComponent = article.discount ? (
    <h3 className="cart__description-oldPrix">
      {article.discount}
    </h3>
  ) : '';

  return (
    <div className={`cart ${className}`}>
      {NewComponent}
      {SoldComponent}
      <img alt="" src={article.image} />
      <div className="cart__description ">
        <h4 className="cart__description-title">
          {article.title}
        </h4>
        <h4 className="cart__description-color">
          {article.color}
        </h4>
        {DiscountComponent}
        <h3 className="cart__description-prix">
          {article.prix}
        </h3>
      </div>
    </div>
  );
};

CartComponent.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object,
};


export default withArticleStyle(CartComponent);
