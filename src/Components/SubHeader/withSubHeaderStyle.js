import styled from 'styled-components';

export default (Component) => styled(Component)`
    height: 40px;
    width: 100%;
    background-color: #F3F3F3;
    display: flex;
    align-items: center;
    color: #B3B3B3;
    
    

    select {
        margin: auto 36px;
        margin-right:0px;
        background-color: transparent;
        border-color: transparent;
           
        color: #737373;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0.8px;
        line-height: 15px;
        text-transform: uppercase;
    }
    
    .header__compte-menu {
        flex-basis: 967px;
        margin-left: 26px;
        
        .item  {
            color: #B3B3B3 !important;
            margin-right: 24px;
            &:nth-child(2) {
                margin-right: 30px;
            }
        }
        a{
            text-decoration: none !important;
        }
    }
    
    .header__compte-login,
    .header__compte-panier {
        text-align: center;
        flex-basis: 180px;
        line-height: 40px;
       
        position: relative;
        display: inline ;
        color: #737373;
       
        img {
            margin-right: 14px;
        }
    }

    .header__compte-panier {
        background-color: #DEDEDE;
        
    }
     
    
        
    
        
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    font-weight: 500;
    
`;
