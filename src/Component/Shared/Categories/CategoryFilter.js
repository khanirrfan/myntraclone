import React from 'react';
import Checkbox from '../Pages/Checkbox';

import { CategoryContainer } from './CategoryFilterElements';
import  { UnorderedList } from '../../Shared/Pages/SharedPagesElement';

import { useStateValue } from '../StateProvider/StateProvider';
const CategoryFilter = ({filter}) => {
    const [{homeData, bag, wishlist, brand}, dispatch] = useStateValue();
    const category = (e) => {
        console.log("hello from category");
        dispatch({
            type:"CATEGORY",
            payload: e.target.value
        })
    }
    return (
        <>
        <CategoryContainer>
        <p>Categories </p>
        <UnorderedList>
            { filter.filterValues &&
                filter.filterValues.map((item, index) => {
                    return ( <Checkbox key ={index} item={item} getFilterType = {(e) => {category(e)}}/>)
                })
            }
            </UnorderedList>
        </CategoryContainer>
        
        </>
    )
}

export default CategoryFilter
