import styled from 'styled-components';

export default (Component) => styled(Component)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-content: flex-start;
    margin: 14px 30px;
    height:100%;
    position: relative;
    /* justify-content: space-between; */
    width: auto;

   
@media screen and (max-width: 768px) {
    height: auto;
    
    }
@media screen and (max-width: 640px) {
    height: auto;
    .cart {
        flex-basis: 100%
    }
    }
`;
