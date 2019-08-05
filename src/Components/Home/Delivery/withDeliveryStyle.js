import styled from 'styled-components';

export default (Component) => styled(Component)`
    text-align: center;
    height: 180px;
    width: 566.5px;
    background-color: #FFFFFF;
    background-image: url("/images/background/dasded_line.png") !important;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin: auto;
    margin-left: 27%;
    position: relative;

    p {
        color: #1E2226;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        text-transform: uppercase;
        letter-spacing: -0.4px;
    }

    a {
        text-decoration: none;
        color: #1366DA;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.2px;
        line-height: 18px;
        text-transform: uppercase;
    }

    .delivery__title {
        position: absolute;
        top: 43%;
        left: 32.4%;
        transform: translate(-20%, -50%);
    }
    .delivery__moreInfo {
        position: absolute;
        top: 64%;
        left: 51.5%;
        transform: translate(-50%, -50%);
        &:after {
            content: '\\203A';
            color: #1366DA;
            margin-left: 1px;
        }
    }
    &:before {
        content: " ";
        height: 50%;
        width: 50px;
        background: url(/images/icon/position.svg) no-repeat !important;
        position: absolute;
        top: 52%;
        left: -2%;
        z-index: 5;
       
    }
    &:after {
        content: " ";
        height: 50%;
        width: 50px;
        background: url(/images/icon/fin.svg) no-repeat !important;
        position: absolute;
        top: 47%;
        right: -10%;
        z-index: 5;
    
    }

     @media screen and (max-width: 768px) {
        margin-left: 12%;
        span {
            top: 54%;
            left: 50.5%;
        }
    }

     @media screen and (max-width: 640px) {
        width: 88%;
        background-position: 44% 28%;
        margin-left:auto;
        span {
            top: 37%;
            left: 50.5%;
        }
        &:before {
            top: 39%;
            left: 5%;
        }
        &:after {
            top: 35%;
            right: 1%;
        }
    }

`;
