import styled from 'styled-components';

export default (Component) => styled(Component)`
    display: flex; 
    align-items: center;
    height: 93px;

    margin: auto 40px auto 37px;
    position: relative;

    .header__navbar-logo {
        flex-basis: auto;
    }

    .header__navbar-menu {
        flex-basis: auto;
        margin-left: 45px;

        ul {
            list-style: none;
            padding:0;
            li {
                margin-right: 62px;
                position: relative;
                display: inline-block;
                &:after {

                    content: " ";
                    height: 7px;
                    width: 7px;
                    display: block;
                    border: 1px solid;
                    transform: rotate(45deg);
                    border-style:1px solid;
                    border-color:transparent #1366DA  #1366DA transparent;
                    position: absolute;
                    top: 25%;
                    right: -50%;
                }
            &:first-child {
                &:after {right: -31%;}
            }
            &:last-child {
                margin-right: auto;
                &:after {right: -14%;}
            }
        }
        }
        
    }

    .header__navbar-live {
        flex-basis: 214px;
        padding-left: 2.7%;
        position: absolute;
        right: 19.1%;
        a {  
            color: #1E2226;
            text-decoration:none;
            line-height: 45px;
            font-family: "Open Sans";
            font-style: italic;
            font-weight: 800;
            letter-spacing: normal;
            padding-bottom: 3px; 
            border-bottom: 2px solid #1E2226;
        }
    }

    .header__navbar-eco {
        flex-basis: 218px;
        padding-left: 3.4%;
        position: absolute;
        right: 4%;
        a {
            text-decoration:none;
            line-height: 40px;
        }
        p {
            display: inline;
            color: #80C816;
            font-weight: 600;
            
            &:last-child {
                color: #1E2226;  
                letter-spacing: 2px;
            }
        }
        
    }

    .header__navbar-search {
        flex-basis: auto;
        position: absolute;
        right: 0;
    }


    
    color: #1E2226;       
    font-family: Montserrat;
    font-size: 16px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    font-weight: 500;
                
`;
