import styled from 'styled-components';
import  {Link}  from 'react-router-dom';

export const ItemImageContainer = styled(Link)`
    width:18%;
    height:18%;
    display:flex;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
    color:#000;
    /* border:1px solid green; */
    /* text-align:center; */
    margin:1px;
    
`;
export const ItemDetailContainer = styled.div`
    width:15%;
    height:15%;
    display:flex;
    border:1px solid green;
    text-align:center;
    margin:2px;
`;

export const Img = styled.img`
    height:100%;
    width:100%;
`;

export const ImageItemDetails = styled.div`
    flex-wrap:wrap
`;