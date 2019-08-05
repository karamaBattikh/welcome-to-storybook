import styled from 'styled-components';

export default (Component) => styled(Component)`
  height:auto;
  width:auto;



  background: url('/images/background/Ecofriendly_pic.png') no-repeat;
  background-size: cover;
  background-size: 100% 290px;
  position: relative;

  background-color: #F3F3F3;
  padding-top: 60px;
  padding-bottom: 51px;
  .eco__article-title {
    color: #ffffff;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    padding: 25px;
    /* padding-bottom: 22px; */
  }

  .eco__article-seeAll {
    position: absolute;
    top: 16%;
    left: 91%;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 0.17px;
    line-height: 20px;
    text-transform: uppercase;
    text-decoration: initial;
    border-bottom: 0.08px solid;
    /* transform: translate(-50%, -50%) */
  }

  .slider-style {
    position: absolute;
    /* margin-top: 15px; */
    left: 49.4%;
    transform: translateX(-50%);
    .cercle-style {
      display: inline-block;
      height: 11px;
      width: 11px;
      border-radius: 10px;
      margin-left: 18px;
      background-color: #c6c6c6;

      &:first-child {
        background-color: #737373;
      }
    }
  }


  @media screen and (max-width: 768px) {
    height: auto;
    padding-bottom: 66px;
      .cart:nth-child(2n+1) {
        margin-right: 0px;
      }
      .cart:nth-child(1),
      .cart:nth-child(4) {
        display: none !important;
      }

      .eco__article-seeAll{
        display: inline-block;
        margin-top: -0.5%;
        left: 81%;
        border-bottom: 0;
        &:before{
          content: ' ';
          width: 5px;
          height:5px;
          border: 1px solid gray;
          display: inline-block;
          background-color: gray;
          clip-path: polygon(0 0, 100% 50%, 100% 50%, 0 100%);
          position: absolute;
          right: 3%;
          top: 24%;
        }
        &:after{
          content: ' ';
          height: 15px;
          width: 15px;
          background-color: #FFFFFF;
          border-radius: 10px;      
          display: inline-block;
        }
      }

      .slider-style {
        margin-top: 15px;
        left: 49%;
      }
}


 @media screen and (max-width: 640px) {
    height: auto;
    padding-top: 0px;
    padding-bottom: 66px;
    background-size: 100% 228px;
      .cart:nth-child(n) {
        margin-right: 0px;
      }
      .cart:nth-child(1),
      .cart:nth-child(3),
      .cart:nth-child(4) {
        display: none !important;
      }

      .eco__article-seeAll{
        display: inline-block;
        margin-top: -8.5%;
        left: 81.5%;
        &:before{
          content: ' ';
          width: 5px;
          height:5px;
          border: 1px solid gray;
          display: inline-block;
          background-color: gray;
          clip-path: polygon(0 0, 100% 50%, 100% 50%, 0 100%);
          position: absolute;
          right: 3%;
          top: 24%;
        }
        &:after{
          content: ' ';
          height: 15px;
          width: 15px;
          background-color: #FFFFFF;
          border-radius: 10px;      
          display: inline-block;
        }
      }

      .slider-style {
        margin-top: 15px;
        left: 49%;
      }
}
`;
