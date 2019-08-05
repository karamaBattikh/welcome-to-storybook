import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import withThirdComponentStyle from './withThridComponentStyle';


const HomeThirdComponent = ({ className, news }) => (
  <div className={className}>

    <div className="photo">
      <img src="/images/photo/Pic_3.png" alt="" />
      <button type="button" className="insta-button">
        <img src="/images/icon/insta_icon.svg" alt="" />
      </button>
    </div>
    <div className="top-street">
      <span>
        <h2> Top 8 street style trends: spring 2016</h2>
        <h4> the soft sun collection essentials </h4>
      </span>
      <button type="button" className="pub-button"> view the top </button>
    </div>
    <div className="news">
      <h4 className="sub-title">LAST NEWS</h4>
      {map(news, (item, index) => (
        <div key={index}>
          <h2 className="title">{item.title}</h2>
          <h4 className="description">{item.description}</h4>
          <h4 className="date">{item.date}</h4>
        </div>
      ))}


      <div className="slider-style">
        <ul>
          <li className="cercle-style" />
          <li className="cercle-style" />
          <li className="cercle-style" />
        </ul>
      </div>
    </div>
    <div className="hashtag">
      <h4> use hashtag and show your style </h4>
      <ul>
        <li>
          <button type="button" className="cercle">
            <img src="/images/icon/facebook_icon.svg" alt="" />
          </button>
        </li>
        <li>
          <button type="button" className="cercle">
            <img src="/images/icon/twitter_icon.svg" alt="" />
          </button>
        </li>
        <li>
          <button type="button" className="cercle">
            <img src="/images/icon/google_icon.svg" alt="" />
          </button>
        </li>
        <li>
          <button type="button" className="cercle">
            <img src="/images/icon/instagram_icon.svg" alt="" />
          </button>
        </li>
      </ul>

    </div>
    <div className="photo">
      <img src="/images/photo/Pic_2.png" className="size-photo" alt="" />
      <button type="button" className="insta-button"><img src="/images/icon/insta_icon.svg" alt="" /></button>
    </div>
    <div className="photo hind">
      <img src="/images/photo/Pic_1.png" alt="" />
      <button type="button" className="insta-button"><img src="/images/icon/insta_icon.svg" alt="" /></button>
    </div>


    <button type="button" className="button-vers-top" />
  </div>
);

HomeThirdComponent.propTypes = {
  className: PropTypes.string,
  news: PropTypes.any,
};

export default withThirdComponentStyle(HomeThirdComponent);
