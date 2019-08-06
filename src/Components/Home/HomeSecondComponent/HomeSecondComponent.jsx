import React from 'react';
import PropTypes from 'prop-types';
import withSecondComponentStyle from './withSecondComponentStyle';
import CartComponent from '../../ListOfArticle/ArticleComponent';
import { dataOfArticle } from '../../../mockData/dataOfHomeContent';

const HomeSecondComponent = ({ className }) => (
  <div className={className}>

    <div className="home__secondSlider-sumer">
      <h2 className="title"> Sunwashed shades of summer</h2>
      <h4> the soft sun collection essentials</h4>
      <button type="button" className="pub-button"> view the selection  </button>
    </div>

    <div className="home__secondSlider-wamen">
      <h4 className="title"> shop </h4>
      <h2> Women </h2>
    </div>

    <div className="home__secondSlider-men">
      <h4 className="title"> shop </h4>
      <h2> men </h2>
    </div>

    <div className="home__secondSlider-article">
      <CartComponent article={dataOfArticle} />
      <div className="slider-style">
        <ul>
          <li className="cercle-style" />
          <li className="cercle-style" />
          <li className="cercle-style" />
        </ul>
      </div>

    </div>

    <div className="home__secondSlider-vedio">
      <img src="/images/icon/oval.svg" alt="" />
      <h2> dive into summer </h2>
      <h4> with the spring/summer  2016 collectio for kids </h4>
    </div>
  </div>

);

HomeSecondComponent.propTypes = {
  className: PropTypes.string,
};

export default withSecondComponentStyle(HomeSecondComponent);
