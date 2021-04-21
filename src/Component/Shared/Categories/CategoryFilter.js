import React from 'react';
import Checkbox from '../Pages/Checkbox';

import { CategoryContainer } from './CategoryFilterElements';
import  { UnorderedList } from '../../Shared/Pages/SharedPagesElement';
const CategoryFilter = ({filter, getFilterType}) => {
    return (
        <>
        <CategoryContainer>
        <p>Categories </p>
        <UnorderedList>
            { filter.filterValues &&
                filter.filterValues.map((item, index) => {
                    return ( <Checkbox key ={index} item={item} />)
                })
            }
            </UnorderedList>
        </CategoryContainer>
        
        </>
    )
}

export default CategoryFilter
