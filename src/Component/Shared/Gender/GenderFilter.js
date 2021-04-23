import React from 'react';

import { GenderContainer } from './GenderFilterElements';
import { UnorderedList } from '../../Shared/Pages/SharedPagesElement';
import RadioBoxes from '../Pages/RadioBoxes';

import { useStateValue } from '../StateProvider/StateProvider';
const GenderFilter = ({filter}) => {
    const [{homeData, bag, wishlist, brand}, dispatch] = useStateValue();
    const gender = (e) => {
        console.log("hello from gender");
        dispatch({
            type:"GENDER",
            payload: e.target.value
        })
    }
    return (
        <>
            <GenderContainer>
                <UnorderedList>
                    { filter.filterValues &&
                        filter.filterValues.map((item, index) => {
                            return <RadioBoxes key={ index} item={ item } getGender = {(e) => {gender(e)}}/>
                        })
                    }
                </UnorderedList>
            </GenderContainer>
        </>
    )
}

export default GenderFilter
