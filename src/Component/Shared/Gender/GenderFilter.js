import React from 'react';

import { GenderContainer } from './GenderFilterElements';
import { UnorderedList } from '../../Shared/Pages/SharedPagesElement';
import RadioBoxes from '../Pages/RadioBoxes';
const GenderFilter = ({filter}) => {
    return (
        <>
            <GenderContainer>
                <UnorderedList>
                    { filter.filterValues &&
                        filter.filterValues.map((item, index) => {
                            return <RadioBoxes key={ index} item={ item } />
                        })
                    }
                </UnorderedList>
            </GenderContainer>
        </>
    )
}

export default GenderFilter
