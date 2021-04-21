import React from 'react';
import  Checkbox  from '../Pages/Checkbox';

import { BrandsContainer } from './BrandFilterElements';
import { UnorderedList} from '../../Shared/Pages/SharedPagesElement';
const BrandsFilter = ({filter, getFilterType}) => {
    return (
        <>
        <BrandsContainer>
        <p>Brands</p>
        <UnorderedList>
        { filter.filterValues &&
            filter.filterValues.slice(0,8).map((item, index) => {
                return ( <Checkbox key ={index} item={item}/>)
            })
        }
        </UnorderedList>
        </BrandsContainer>
        </>
    )
}

export default BrandsFilter;
