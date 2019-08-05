import styled from 'styled-components';

export default (Component) => styled(Component)`
        .homeContent__footer-about {
              text-align: center;
              .title{
                color: #1E2226;
                font-family: Montserrat;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 0.17px;
                line-height: 24px;
                text-align: center;
                text-transform: uppercase;
              }
              .description{
                  margin: auto;
                   width: 44%;
                  color: #1E2226;
                  font-family: Montserrat;
                  font-size: 14px;
                  letter-spacing: 0.1px;
                  line-height: 24px;
                  text-align: center;
                  text-transform: none;
                  margin-top: 30px;
                  @media screen and (max-width: 768px) {
                  width: 60%;
                  }
              }
              
              .moreInfo{
                    text-align: center;
                    margin: 13px auto;
                    a{
                        text-decoration: none;
                        color: #1366DA;
                        font-family: Montserrat;
                        font-size: 14px;
                        letter-spacing: 0.2px;
                        line-height: 18px;

                        &:after{
                        padding-left:0.8em;
                        content: '\\203A'; 
                    }
                }
            } 

             .moreInfo-mobile{
                 display: none;
             }

          }
          @media screen and (max-width: 768px) {
            .homeContent__footer-about {
                .moreInfo{ display: none; }
            
            .moreInfo-mobile{
               
                display: block;
                color: #fff;
                height: 28px;
                width: 90px;
                border-radius: 23px;

                background-color: #1366DA;
                font-family: Montserrat;
                font-size: 14px;
                letter-spacing: 0.2px;
                line-height: 18px;
                text-transform: uppercase;
                border: 0;
                margin-top: 4%;
                margin-left: 44%;
            }
        }
          }
       
`;
