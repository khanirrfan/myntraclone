import styled from 'styled-components';


export const ImagePreviewContainer = styled.div`
    width:60%;
    /* border:1px solid red; */
    margin-right:5px;
`;
export const ImageHomeContainer = styled.div`
    margin:.5% 5%;
    padding:1%;
`;

export const ImageBreadcrumbContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;
export const DetailsContainer = styled.div`
    display: flex;
    margin: 0 auto;

`;

export const BrandDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-bottom:1px solid red;
`;

export const PriceDetailContainer = styled.div`
    display: flex;
`;

export const SizeDetailContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

export const ButtonContainer = styled.div`
    display: flex;
    border-bottom: 1px solid;
`;

export const Buttons = styled.button`
    width:100px;
    margin:5px;
    padding:10px;
    cursor: pointer;
`;

export const ImageContainer = styled.div`
    
    display:flex;
    flex-wrap:wrap;
    cursor: pointer;
    text-decoration: none;
    color:#000;
    margin:1px 0;
    justify-content: space-around;
`;
export const Img = styled.img`
    padding:2px;
    height:45%;
    width:45%;
`;

export const ItemDetailContainer = styled.div`
    padding:10px;
    /* border:1px solid; */
    height:100%;
`;

export const SpanContainer = styled.span`
    padding: 8px 0;
`;
export const ReviewContainer = styled.span`
    cursor:pointer;
    width:100%;
    max-width:100px;
    padding:10px;

    &:hover{
        border:1px solid;
        width:100%
    }
`;

export const CircleSize = styled.div`
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    border: 0.5px solid ;
    margin:2px;
    cursor: pointer;

    &:hover{
        border:0.5px solid red;
        /* color:#fff; */
    }
`;