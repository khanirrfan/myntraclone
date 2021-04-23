import React from 'react';
import BagItems from '../BagItems/BagItems';
import { useStateValue } from '../StateProvider/StateProvider';

import { CheckoutContainer, ItemContainer, ImageContainer, ItemsDetailsContainer } from './BagElement';

const Bag = () => {
    const [{ bag }] = useStateValue();
    // console.log(bag)
    return (
        <>
            <CheckoutContainer>
                <ItemContainer>
                {/*{bag && 
                    bag.map(item => {
                        return <BagItems />
                    })

                }*/}
                    { bag?.length === 0 ?
                        (
                            <p>Bag is empty</p>
                        ) : (
                            <>
                            {
                                bag?.map((item, index) => {
                                    return <BagItems key ={ index} items = {item}/>
                                })
                            }
                            </>
                        )
                    }
                </ItemContainer>
            </CheckoutContainer>
        </>
    )
}

export default Bag;
