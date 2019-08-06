import styled from 'styled-components';

export default (Component) => styled(Component)`
    margin-top: 55px;
    height: 100%;
    background-color: #282E33;
    .footer__about {
        display: flex;
        margin-left: 110px;
        padding-top: 47px;
        padding-bottom: 16px;

        .footer__about-item {

            p {
                color: #FFFFFF;
                font-family: Montserrat;
                font-size: 12px;
                letter-spacing: 0.2px;
                line-height: 15px;
                text-transform: uppercase;
                margin-bottom: 15px;
            }
            ul {
                list-style: none;
                padding-left: 0;
            
                color: #737373;
                font-family: Montserrat;
                font-size: 12px;
                letter-spacing: 0.2px;
                line-height: 24px;
            }

            &:nth-child(1){
                margin-right: 164px
            }
            &:nth-child(2){
                margin-right: 125px;
            }
            &:nth-child(3){
                margin-right: 170px;
            }
            &:nth-child(4){
                margin-right: 85px;
            }
        }   

    }

    .footer__shopping{
        margin: 23px auto;
        padding: 0px 108px;
        overflow: hidden;
        .footer__shopping-select {
            display: flex;
            float: left;

            p{
                color: #FFFFFF;
                font-family: Montserrat;
                font-size: 12px;
                letter-spacing: 0.2px;
                line-height: 15px;
                text-transform: uppercase;
                /* margin-right: 33px; */
                align-self: center;
                margin-right: 16px;
            }

            select{
                height: 40px;
                width: 220px;
                border: 1px solid #464A4D;
                background-color: transparent;
                padding-left: 11px;
                
                color: #FFFFFF;
                font-family: Montserrat;
                font-size: 12px;
                letter-spacing: 1px;
                line-height: 15px;
                text-align: center;

            }
        }
        .footer__shopping-listCarte {
            float: right;
            margin-top: 7px;
        }

    }

 
 @media screen and (max-width: 768px) {
    margin-top: 71px;

    .footer__about {
        margin-left: 41px;
        padding-top: 46px;
        .footer__about-item {
            &:nth-child(1){
                margin-right: 95px
            }
            &:nth-child(2){
                margin-right: 57px;
            }
            &:nth-child(3){
                margin-right: 95px;
            }
            &:nth-child(4){
                margin-right: 0px;
            }
            &:last-child{
                display: none;
            }
        }    
    }

     .footer__shopping{
        margin: 22px auto;
        padding: 0px 39px;
        .footer__shopping-select {
            p{
            margin-right: 15px;
            }
        
            select{
                width: 178px;
               
            }
        }
       

        .footer__shopping-listCarte {
             margin-top: 9px;
         }
    }
}

@media screen and (max-width: 640px) {
    margin-top: 23px;

    .footer__about {
        .footer__about-item {
            &:nth-child(1){
                margin-right: 57px
            }
            &:nth-child(2){
                margin-right: 22px;
            }
            &:nth-child(3){
                margin-right: 64px;
            }
            &:nth-child(4){
                margin-right: 0px;
            }
            &:last-child{
                display: none;
            }
        }    
    }

    .footer__shopping{
        margin: 24px auto 14px auto;
        padding: 0px 39px;
        .footer__shopping-select {
            p{
            margin-right: 15px;
            }
        
            select{
                width: 150px;
               
            }
        }
       

        .footer__shopping-listCarte {
            background-image: url(/images/icon/cards_icons.png);
            background-repeat: no-repeat;
            background-position: -11% -4%;
            height: 40px;
            width: 268px;
   
            img{
                 display: none;
            }
            
        }
    }
}
    
`;
