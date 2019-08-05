import styled from 'styled-components';

export default (Component) => styled(Component)`
    height: 354px;
    width: 300px;
    border: 1px solid #E8E8E8;
    background-color: #FFFFFF;
    margin-bottom: 23px;
    position: relative;
    margin-right: 24px;
   &:nth-child(4n){
        /* background-color: red; */
        margin-right: 0px;
    }

.cart__description {
    position: absolute;
    bottom: 0px;
    left: 50%;
    text-align: center;
    transform: translatex(-50%);
    width: 100%;

    .cart__description-title {
        color: #1E2226 !important;
        font-family: Montserrat;
        letter-spacing: 0.2px;
        font-size: 14px;
        line-height: 15px;
        text-transform: uppercase;
    }
    .cart__description-color {
        color: #C6C6C6;
        font-family: Montserrat;
        font-size: 14px;
        letter-spacing: 0.2px;
        line-height: 18px;
        margin-bottom: 20px;
        text-transform: none;
    }
    .cart__description-oldPrix{
        color: #88A7D4;
        font-family: Montserrat;
        font-size: 12px;
        line-height: 15px;
        text-decoration: line-through;
        font-size: 12px !important;
        margin-top: -15px;
    }
    .cart__description-prix {
        color: #1366DA;
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
    }
}
img{
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cart__solde{
    padding: 0.4em;
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    width: 70px;
    display: block;
    border-radius: 25px; 
    background-color: #EB3D15;
    top: 7%;
    position: absolute;
    right: 15px;
    z-index: 2;
}
.cart__new{
    padding: 0.4em;
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    width: 70px;
    display: block;
    border-radius: 25px; 
    text-transform: uppercase;
    background-color: #80C816;
    top: 7%;
    position: absolute;
    right: 15px;
    z-index: 2;
}
`;
