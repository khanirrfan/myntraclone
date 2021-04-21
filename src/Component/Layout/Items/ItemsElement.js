import styled from 'styled-components';

export const ItemsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 1px solid red;
`;

export const HeaderFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    position:relative;
`;

export const SortFilter = styled.div`
    z-index:1;
    position:absolute;
    margin-left:85%;
    width:200px;
`;

export const FilterChips = styled.div`
   margin: 0 15px;
    width: 60px;
    padding: 0 10px;
    `;