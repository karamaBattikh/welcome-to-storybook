import styled from 'styled-components';

export default (Component) => styled(Component)`
    margin: 66px 40px 0px 40px;
    background-color: #F8F8F8;
    height: 675px;
    display: flex;

    position: relative;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin: 66px 44px 0px 44px;
        height: 100%;
    }

      @media screen and (max-width: 640px) {
        flex-wrap: wrap;
        margin: 42px 40px 0px 40px;
        height: auto;
    }

    h2{
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 26px;
        font-weight: bold;
        line-height: 32px;
        text-transform: uppercase;
        margin-bottom: 7px;
        text-align: center;
    }

    h4 {
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        text-align: center;
        margin-bottom: 4px;
    }


.home__secondSlider-sumer {
    flex-basis: 50% ;
    height: 335px;

    background-color: rgba(0, 0, 0, 0.534);
    position: relative;

    &:before {
        content: "";
        background: url("/images/photo/Bitmapflow.png") no-repeat;
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;
        filter: blur(5px);
        opacity: 0.4;
    }
    .title {
        margin: auto;
        margin-top: 15%;
        width: 50%;
        text-align: center;
        margin-bottom: 1.5%;
    }
    .pub-button {
        height: 40px;
        width: 194px;
        background-color: #FFFFFF;

        color: #1E2226;
        font-family: Montserrat;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;

        margin: 4.5% 35% 0px 36%;
        
    }
  
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }
}

.home__secondSlider-wamen,
.home__secondSlider-men {
    width: 25%;
    height: 340px;
    position: absolute;
    align-self: flex-end;
    background: url("/images/photo/BitmapW.png") no-repeat;
    .title {
        margin-top: 42%;
    }
    @media screen and (max-width: 768px) {
        width: 50%;
        position: relative;
        align-self: initial;
    }
}

.home__secondSlider-men {
    left: 25%;
    background: url("/images/photo/BitmapM.png") no-repeat;
    @media screen and (max-width: 768px) {
        left: 0%;
    }
}

.home__secondSlider-article {
    flex-basis: 25%;
    position: relative;

    .cart {
        margin: 0;
        background-color: #F8F8F8;
        height: 100%;
        border: 0;
        .cart__solde {
            top: 3.5%;
            left: 76%;
        }
        img {
            position: absolute;
            top: 42%;
            left: 53%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
        .cart__description {
            bottom: 71px;
            width: 54%;  
            left: 53%;
            .cart__description-oldPrix{
              margin-top: 0px;      
            }
                          
        }
    }  
    
    .slider-style {
        position: absolute;
        bottom: 32px;
        left: 47%;
        transform: translateX(-50%);
        .cercle-style {
            display: inline-block;
            height: 11px;
            width: 11px;
            border-radius: 10px;
            margin-left: 18px;
            background-color: #C6C6C6;
                
            &:first-child {
                background-color: #737373;
            }
        }
        
    }

   @media screen and (max-width: 768px) {
        flex-basis: 50%;
        background-color: #F8F8F8;
        .cart {
            
            top: 2%;
            position: relative;
            img{
                height: 209px;
                width: 184px;
            }
            .cart__description {
                background: linear-gradient(180deg, rgba(248,248,248,0.5) 0%, #F8F8F8 100%);
                width:100%;
                padding-bottom: 70px;
                margin: auto;
        
                position: absolute;
                top: 51%;
                .cart__description-title{
                    width: 54%;
                    margin-left: 23%;
                }
            }
        }
        .slider-style {
            bottom: 20px;
        }
    }
}

.home__secondSlider-vedio {
    flex-basis: 25%;
    height: 100%;
    background-image: url("/images/photo/Bitmap_1.png") ;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;

       h2 {
        margin-top: 40px;
        width: 50%;
        margin-left: 84px;
       }
        h4 {
            letter-spacing: 0.4px;
            width: 70%;
            margin: auto;
        }
        img {
            margin-top: 64%;
        }
   

    @media screen and (max-width: 768px) {
        flex-basis: 50%;
        position: relative;
        height: 340px;
        background-position-y: 38%;
        img {
            margin-top: 12%;
        }
    }

    @media screen and (max-width: 640px) {
        flex-basis: 50%;
        position: relative;
        height: 330px;
        background-position-y: 38%;
        span {
            top: 50%;
            img {
                margin-bottom: 20px;
                width: 37%;
            }
        }
    }
}

`;
