import styled from 'styled-components';

export default (Component) => styled(Component)`
    max-width: 1440px;
    margin: auto;
    .mobile{
        display: none;
    }
    @media screen and (max-width: 768px) {
        .desktop{
            display: none;
            
        }
        .mobile{
            display: block;
    }
    }

`;
