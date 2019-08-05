import styled from 'styled-components';

export default (Component) => styled(Component)`
    background-color: #F3F3F3;
    height: auto;
    width: auto;
    padding-bottom: 53px;
    padding-top: 33px;

    .daily__deals-title {
      color: #1e2226;
      font-family: Montserrat;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 0.2px;
      line-height: 29px;
      text-align: center;
      text-transform: uppercase;

      margin: 28px auto;
    }

    .daily__deals-navigation {
      text-align: center;
      margin-bottom: 15px;
      @media screen and (max-width: 768px) {
        width: 71%;
        margin: 31px auto;
        margin-bottom: 28px;
      }
      @media screen and (max-width: 640px) {
        width: 85.1%;
        margin-bottom: 35px;
      }

      a {
        text-decoration: none;
        color: #1e2226;
        font-family: Montserrat;
        font-size: 16px;
        letter-spacing: 0.2px;
        line-height: 30px;
      

        margin-right: 20px;
        text-transform: uppercase;

        &:first-child {
          padding-bottom: 7px;
          border-bottom: 2px solid;
        }
        &:last-child {
          margin-right: 0px;
        }
      } 
    }

    .daily__deals-moreInfo {
      /* text-align: center; */
      /* margin: 15px auto; */
      margin-left: 46.1%;
      position: relative;
      a {
        text-decoration: none;
        color: #1366da;
        font-family: Montserrat;
        font-size: 14px;
        letter-spacing: 0.2px;
        line-height: 18px;
        font-weight: 600;
        text-transform: uppercase;

        &:after {
          padding-left: 0.8em;
          content: '\\203A';
        }
      }
      .slider-style {
        display: none;
      }


      @media screen and (max-width: 768px) {
        a {display: none;}
        margin-left:auto;
        .slider-style {
            display: block;
            position: absolute;
            left: 49%;
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
      }
    }

     @media screen and (max-width: 768px) {
        height: 1039px;
        
        .cart:nth-child(2n) {
            margin-right: 0px;
        }
        .cart:nth-last-child(-n+4) { /* les trois derniers enfants */
            display: none !important;
        }
      }

       @media screen and (max-width: 640px) {
        height: 1017px;
        padding-top: 8px;

        .cart:nth-child(n) {
            margin-right: 0px;
        }
        .cart:nth-child(2) {
            display: none;
        }
        .cart:nth-last-child(-n+5) { /* les trois derniers enfants */
            display: none !important;
        }
      }
`;
