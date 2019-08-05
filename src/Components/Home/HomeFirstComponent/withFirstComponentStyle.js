import styled from 'styled-components';

export default (Component) => styled(Component)`
    background-image: url("/images/background/Slider_pic.png") !important;
    background-repeat: no-repeat;
    height: 646px;
    display: flex;
    align-items: flex-end;
    h1 {
                        
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 30px;
        letter-spacing: 0.4px;
        line-height: 30px;
        text-transform: uppercase;
        font-weight: 500 !important;
    }

    .home__slider-mobile {
        display: none;
    }

    .home__slider-item {
        width: calc(100% / (${(props) => props.dataOfSliderHome.length}));
        opacity: 0.5;
        position: relative;
        &:after {
            content: ' ';
            display: block;
            border-right: 1px solid #FFFFFF;
            height: 646px;
            position: absolute;
            bottom: 0px;
        }
        span {
            width: 185px;
            margin-bottom: 44px;
            display: block;
            margin-left: 37px;
        }

        &:nth-child(2) {
            opacity: 1;
          
            span:after {
                content: "";
                width: 205px;
                height: 15px;
                display: block;
                background-color: #fff;
                margin: 44px auto -44px -37px;
            }
        }

        &:nth-child(3) {
            span {
               width: 20%;
            }
        }

    }
   
    .home__slider-mobile {
        position: relative;
        width: 100%;
        h1 {
            width: 42%;
            position: absolute;
            top: 36%;
            left: 30%;

            font-size: 36px;
            line-height: 44px;
            font-weight: bold;
        }

        button {
            color: #FFFFFF;
            height: 40px;
            width: 180px;
            border: 2px solid #FFFFFF;
            background-color: transparent;
            text-transform: uppercase;

            position: absolute;
            top: 53%;
            left: 38%;
        }

        .slider-style {
            position: absolute;
            left: 48.5%;
            bottom: 8%;
            transform: translateX(-50%);

            .cercle-style {
                display: inline-block;
                height: 11px;
                width: 11px;
                border-radius: 10px;
                margin-left: 18px;
                background-color: #c6c6c6;
            }
        }
    }

    @media screen and (max-width: 768px) {
        height: 769px;
        width: 769px;
        .home__slider-item {
            display: none;
        }
        background-size: cover;
        background-position: 8%;

        .home__slider-mobile {
            display: block;
        }
    }

    @media screen and (max-width: 640px) {
        width: 640px !important;
        height: 900px;
        .home__slider-item{
            display: none;
        }
        background-size: cover;
        background-position: 18%;

        .home__first-mobile {
            h1 {
                width: 50%;
                top: 35.5%;
                left: 26%;
            }
            button {
                top: 51.2%;
                left: 36%;
            }
        }
    }


`;
