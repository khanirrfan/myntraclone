import React, { useEffect, useState } from 'react'
import { 
    ImageHomeContainer, 
    ImageBreadcrumbContainer, 
    ItemDetailContainer, 
    PriceDetailContainer, 
    BrandDetailsContainer, 
    DetailsContainer, 
    ButtonContainer, 
    Buttons, 
    SizeDetailContainer, 
    ImagePreviewContainer, 
    ImageContainer, 
    Img,
    SpanContainer,
    ReviewContainer,
    CircleSize
} from './PageDetailsElement';
import { useLocation } from "react-router-dom";

import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import { useStateValue } from '../Shared/StateProvider/StateProvider';

const PageDetails = () => {
    const [{bag}, dispatch] = useStateValue();

    let location = useLocation()
    const [item, setItem] = useState()
    // console.log(item)
    useEffect(() => {

        setItem(location);
    }, []);
    // console.log(item)

    const addToBag = () => {
        dispatch({
            type:'ADD_TO_BAG',
            payload: item.item
        })
    }
    return (
        <>

            <ImageHomeContainer>
                <ImageBreadcrumbContainer>
                    <Breadcrumb />
                </ImageBreadcrumbContainer>
                <DetailsContainer>
                    <ImagePreviewContainer>
                        <ImageContainer >
                            { item &&
                                item.item.images.filter((list) => list.view !== "size_representation").map((ele, index) => {
                                    return <Img src={ ele.src } />
                                })
                            }

                        </ImageContainer>
                    </ImagePreviewContainer>

                    <ItemDetailContainer>
                        <BrandDetailsContainer>
                            { item &&
                                <>
                                    <SpanContainer>{ item.item.brand }</SpanContainer>
                                    <SpanContainer>{ item.item.additionalInfo }</SpanContainer>
                                    <ReviewContainer>{ item.item.ratingCount } reviews</ReviewContainer>
                                </>
                            }
                        </BrandDetailsContainer>
                        <PriceDetailContainer>
                            { item &&
                                <>
                                    <p><strong>Rs. { item.item.price } </strong><del>Rs. { item.item.mrp }</del> <span style={ { color: 'red' } }>{ item.item.discountDisplayLabel }</span></p>
                                    <br />
                                    <p>Inclusive of all taxes</p>
                                </>
                            }
                        </PriceDetailContainer>
                        <SizeDetailContainer>
                            <SpanContainer>SELECT SIZE</SpanContainer>

                            { item && 
                                 item.item.sizes.split(",").map((size, index) => {
                                    return (<><CircleSize>{size}</CircleSize></>)
                                 }) 
                            }

                        </SizeDetailContainer>
                        <ButtonContainer>
                            <Buttons onClick = {()=>addToBag()}>Add to bag</Buttons>
                            <Buttons>Wishlist</Buttons>
                        </ButtonContainer>
                    </ItemDetailContainer>
                </DetailsContainer>
            </ImageHomeContainer>
        </>
    )
}

export default PageDetails;
