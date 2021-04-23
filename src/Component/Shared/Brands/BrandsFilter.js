import React from 'react';
import  Checkbox  from '../Pages/Checkbox';

import { BrandsContainer } from './BrandFilterElements';
import { UnorderedList} from '../../Shared/Pages/SharedPagesElement';

import { useStateValue } from '../StateProvider/StateProvider';
const BrandsFilter = ({filter, getFilterType}) => {
    const [{homeData, bag, wishlist, brand}, dispatch] = useStateValue();
    const brands = (e) => {
        // console.log("hello from brands");
        dispatch({
            type:"BRAND",
            payload: e.target.value
        })
    }
    return (
        <>
        <BrandsContainer>
        <p>Brands</p>
        <UnorderedList>
        { filter.filterValues &&
            filter.filterValues.map((item, index) => {
                return ( <Checkbox key ={index} item={item} getFilterType = {(e) => {brands(e)}} />)
            })
        }
        </UnorderedList>
        </BrandsContainer>
        </>
    )
}

export default BrandsFilter;
