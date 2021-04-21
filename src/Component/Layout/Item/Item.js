import React, { useState, useEffect } from 'react';

import { ItemImageContainer, Img, ImageItemDetails } from './ItemElement';

const Item = ({ element }) => {
    const [isShown, setIsShown] = useState(false);
    const [item, setItem] = useState()
    useEffect(() => {

    }, [])
    const onHoverEvent = (e) => {
        setIsShown(!isShown)
        e.preventDefault();
    }
    const onHoverLeave = (e) => {
        setIsShown(!isShown);
        e.preventDefault()
    }

    const ItemDetails = (element) => {
        setItem(element);
        console.log(element)
    }
    return (
        <>
            <ItemImageContainer to={ {
                pathname: "/details",
                item: element
            } } 
                onMouseEnter={ (e) => onHoverEvent(e) }
                onMouseLeave={ (e) => onHoverLeave(e) }>
                <Img src={ element.searchImage } />
                { isShown &&
                    <>
                        <span>WishList</span>
                        <span>Size : { element.sizes }</span>
                        <span><strong>Rs. </strong>{ element.price } <del>Rs. { element.mrp }</del> <span style={ { color: 'red' } }>{ element.discountDisplayLabel }</span></span>
                    </>
                }
                <ImageItemDetails>
                    { !isShown &&
                        <>
                            <span>{ element.brand }</span>
                            <p>{ element.additionalInfo }</p>
                            <p><strong>Rs. </strong>{ element.price } <del>Rs. { element.mrp }</del> <span style={ { color: 'red' } }>{ element.discountDisplayLabel }</span></p>
                        </>
                    }
                </ImageItemDetails>

            </ItemImageContainer>



        </>
    )
}

export default Item;
