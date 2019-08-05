import styled from 'styled-components';

export default (Component) => styled(Component)`
    height: 100%;
    max-height: 100%;
    margin: 87px 40px;
    width: auto;

    display: flex;
    flex-wrap: wrap;
    position: relative;

    h2{
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 26px;
        font-weight: bold;
        line-height: 32px;
        text-align: center;
        text-transform:uppercase;
    }
    h4{
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        text-transform:uppercase;
        margin: 15px;
    }
    span{
        width:65%;
        position:absolute;
        top: 46.5%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    .slider-style {
            position: absolute;
            margin-top: 15px;
            left: 49.4%;
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
    .pub-button {
            height: 40px;
            width: 194px;
            background-color: #FFFFFF;
            border-color: transparent;
            // margin-left: 50%;
            transform: translateX(-50%);
        
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);

            text-transform: uppercase;
            color: #1E2226;
            font-family: Montserrat;
            font-size: 12px;
            line-height: 15px;
        }
    .photo {
            height: 340px;
            flex-basis: 25%;
            display: block;
            position: relative;
            .insta-button{ 
                top: 87%;
                right: 5%;
                background-color: transparent;
                position: absolute;
                border: 0px;
                height: 26.42px;
                width: 23.44px;
            }
            
           
    }

    .top-street {
            height: 340px;
            flex-basis: 45%;
            background-color: rgba(0, 0, 0, 0.534);
            position: relative;
  
            &::before{
                content: "";
                background-image: url("/images/photo/Pic.png") ;
                position: absolute;
                background-size: cover;
                top: 0; 
                left: 0;
                width: 100%; 
                height: 100%;
                filter: blur(5px);
                opacity: 0.4;
                }
    }

    .news { 

            position: relative;
            flex-basis: 27%;
            background-color: #E03E2A;
            padding-top: 36px;

           .title{
            margin-top: 37px;
            width: 90%;
           }
           .description{
            width: 82%;
            margin: auto;
           }
           .date{
               margin-top: 17px
           }
            h2{
            margin: 24px auto;
                font-size: 20px;
                line-height: 24px;
            }
            h4 {
                font-size: 14px;
                text-transform: none;
                line-height: 17px;
            }

            .slider-style {
                bottom: 10%;
                .cercle-style {
                    background-color: #BD3524;
                    
                    &:first-child {
                        background-color: #972A1C;
                    }
                }
            }
    }

    .hashtag {
            position: relative;
            padding-top: 105px;
            flex-basis: 45%;
            background-color: #1366DA;
            display:  inline;
            text-align: center;
            ul{
                list-style: none;
                margin-top: 20px;
                li {
                    display: inline-block;
                    &:not(:last-child){
                    margin-right: 23px;
                    }
                }
            }
            .cercle {
                margin-top: 4% !important;
                width: 44px;
                height: 44px !important;
                background-color: transparent;
                border-radius: 50%;
                border: 2px solid #fff;
                
            }
            
    }

    .button-vers-top{
            position: absolute;
            height: 53px;
            width: 53px;
            background-color: #FFFFFF;
            clip-path: circle(49%);
            right: 5.4%;
            bottom: 14.5%;
            cursor: pointer;

            &::after{
                content: " ";
                height: 15px;
                width: 15px;
                display: block;
                border: 1px solid #1E2226;
                transform: rotate(45deg);
                border-style: solid;
                border-color:   #1E2226 transparent transparent  #1E2226  ;
                margin-left: 15px;
                margin-top: 10px;
              
            }
    }
    @media screen and (max-width: 768px) {
        height: 100%;
        margin: 67px 44px 64px 44px;
        .photo:first-child,
        .hind{
            display: none;
        }
        .top-street{
            flex-basis: 100%;
            order:0;
            span{
                width: 75%;
                position: absolute;
                top: 46%;
                
            }
        }
        .news{
            flex-basis:50%;
            order:2;
            padding-top: 39px;
        }
        .hashtag{
            height: 340px;
            
            flex-basis: 100%;
            order:3;
        }

        .button-vers-top{
            display: none;
        }
    }
        

         @media screen and (max-width: 640px) {
            height: 100%;
            margin: 47px 38px 64px 40px;
            .photo:first-child,
            .hind{
                display: none;
            }
            .top-street{
                flex-basis: 100%;
                order:0;
                span{
                width: 90%;
                position: absolute;
                top: 41%;
            }
            }
            .photo{
                height: 318px;
                
                .size-photo{
                    height: 318px;
                    width: 281.2px;
                }

                .insta-button {
                top: 89%;
                right: 8%;
            }
            }
            .news{
                height: 318px;
                order:2;
                padding-top: 20px;
                flex-basis: 49.9%;
            }
            .hashtag{
                height: 326px;
                flex-basis: 100%;
                order:3;
            }

            .button-vers-top{
                display: none;
            }

            .pub-button {
                top: 70%;
                color: #FFF;
                background-color: transparent;
                border: 2px solid #FFFFFF;
            }
    }
`;
