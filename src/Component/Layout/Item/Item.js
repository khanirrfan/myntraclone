import React, { useState, useEffect } from 'react';

import { ItemImageContainer, Img, ImageItemDetails } from './ItemElement';
import { Buttons } from '../../PageDetails/PageDetailsElement';
import { useStateValue } from '../../Shared/StateProvider/StateProvider';
const Item = ({ element }) => {
    const [{wishlist}, dispatch] = useStateValue()
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
    const addToWishlist = (e) => {
        e.preventDefault()
        dispatch({
            type:"WISHLIST",
            payload: element
        })
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
                        <Buttons onClick={(e) => addToWishlist(e)}>WishList</Buttons>
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
