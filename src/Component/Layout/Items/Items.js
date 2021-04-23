import React, {useState, useEffect} from 'react'
import { ItemsContainer, HeaderFilter, SortFilter, FilterChips } from './ItemsElement';

import Item from '../Item/Item';
import SelectButton from '../../Shared/Pages/SelectButton';
import ButtonChips from '../../Shared/Pages/ButtonChips';
import { useStateValue } from '../../Shared/StateProvider/StateProvider';

const Items = ({ element, sortFilter }) => {
    const [sortBy, setSortBy] = useState();
    const[{category, brand, gender}, dispatch] = useStateValue();
    // console.log(category, brand, gender)
    useEffect(() => {
        setSortBy(sortFilter);
    }, [])
    // console.log(sortFilter);
    return (
        <>
        <HeaderFilter>
        <FilterChips>
            <ButtonChips />
        </FilterChips>
        <SortFilter>
        { sortBy &&
            <SelectButton title = "Recommended" item = {sortBy}/>
        }
        </SortFilter>
        
        </HeaderFilter>

            <ItemsContainer>
                { element ? (
                    element.map((listItem, index) => {
                        return <Item key={ listItem.productId } element={ listItem } />
                    })
                ):(
                    <h1>No data found</h1>
                )
                }
            </ItemsContainer>
        </>
    )
}

export default Items;
