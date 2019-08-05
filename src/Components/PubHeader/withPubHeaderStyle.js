
import styled from 'styled-components';

export default (Component) => styled(Component)`
    height: 41px;
    background-color: #282E33;
    display: flex;
    text-align: center;

   .header__pub-item {
       flex-basis: 33%;
       border-right: 1px;
       margin: auto;
       @media screen and (max-width: 768px) {
            flex-basis: 100%;
            &:not(:nth-child(2)){
                display: none;
            }
        }
       &:nth-child(2) {
           background-color: #1E2226;
       }
       &:last-child {
           a{color: #fff;}
       }


       a{
           margin: auto;
           text-decoration: none;

           color: #C0C5CA;
           font-family: Montserrat;
           font-size: 12px;
           letter-spacing: 0.2px;
           line-height: 41px;
           text-transform: uppercase;
           &:after{
               padding-left:0.8em;
               content: '\\203A'; 
           }
           span {
               left: 0;
               color: #fff;
            }
        }
    }
`;
