import React, {useState, useEffect} from 'react'
import { ItemsContainer, HeaderFilter, SortFilter, FilterChips } from './ItemsElement';

import Item from '../Item/Item';
import SelectButton from '../../Shared/Pages/SelectButton';
import ButtonChips from '../../Shared/Pages/ButtonChips';

const Items = ({ element, sortFilter }) => {
    const [sortBy, setSortBy] = useState();
    useEffect(() => {
        setSortBy(sortFilter);
    }, [])
    console.log(sortFilter);
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
                { element &&
                    element.map((listItem, index) => {
                        return <Item key={ listItem.productId } element={ listItem } />
                    })
                }
            </ItemsContainer>
        </>
    )
}

export default Items;
