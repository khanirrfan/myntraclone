import React from 'react'
import { Buttons } from '../../PageDetails/PageDetailsElement';
import { useStateValue } from '../StateProvider/StateProvider';
import { ImageContainer, ItemsDetailsContainer, CartContainer, Img, ItemCart, CartButton } from './BagItemsElement';
const BagItems = ({ items }) => {

    // console.log(items.productId);
    const [{bag}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BAG',
            id: items.productId
        })
    }
    return (
        <>
            <CartContainer>
                <ItemCart>
                
                <ImageContainer>
                <Img src = {items.searchImage} />
                </ImageContainer>
                <ItemsDetailsContainer>
                <p>{items.brand}</p>
                </ItemsDetailsContainer>
                </ItemCart>
                <CartButton>
                <Buttons onClick= {()=>removeFromBasket()}>Remove</Buttons>
                <Buttons>WishList</Buttons>
                </CartButton>
            </CartContainer>
        </>
    )
}

export default BagItems;
