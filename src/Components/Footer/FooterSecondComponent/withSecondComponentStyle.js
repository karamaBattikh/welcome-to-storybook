import styled from 'styled-components';

export default (Component) => styled(Component)`
 background-color: #1E2226;
    /* height: 137px; */
    width: 100%;
    text-align: center;
    .footer__social-list {
        padding-top: 2.4%;
    }

    .footer__social-list ul {
        margin: 0 auto;
        width: 583px;
        li {
            display: inline-block;
            margin-right: 29px;
            h4 {
                font-size: 12px;
                font-family: Montserrat;
                color: #FFFFFF;
                letter-spacing: 0.2px;
                font-weight: 400;
            }
       }
    }

    .description {
        color: #737373;
        font-family: Montserrat;
        font-size: 10px;
        letter-spacing: 0.17px;
        line-height: 24px;
    }

    .footer__social-icon {
        opacity: 0.5;
        img {
            margin-right: 46px;
        }
    }

     @media screen and (max-width: 768px) {
        .footer__social-list ul {
            margin-top: 15px;
            margin-left: 108px;
        }
        .footer__social-icon {
            margin-left: 295px;
        }
     }

    @media screen and (max-width: 640px) {
        .footer__social-list ul {
            margin-top: 18px;
            margin-left: 43px;
        }
        .footer__social-icon {
            margin-left: 231px;
        }
    }


        
`;
