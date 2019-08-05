import styled from 'styled-components';

export default (Component) => styled(Component)`
    .NavBar {
        height: 92px;
        margin: auto 40px;

        position: relative;
        display: flex;
        align-items: center;
     
        padding-right: 0px;
        position: relative;

        .menu {
            position: absolute; 
            top: 40%;
            .first-bar,
            .second-bar,
            .thrid-bar {
                width: 17px;
                height: 3px;
                background-color: #737373;
                margin-bottom: 5px;
            }

        }

        .searchIcon{
            position: absolute;
            left: 13%;
            transform: translateX(-13%);
        }
        
        .logoIcon{
            position: absolute;
            left: 49.5%;
            transform: translateX(-50%);
            img{
                margin-top: 9px;
            }
            
        }

        .profilIcon{
            position: absolute;
            right: 13%;
            transform: translateX(-13%);
        }

        .panierIcon{
            position: absolute;
            right: 0%;
        }
    }
`;
