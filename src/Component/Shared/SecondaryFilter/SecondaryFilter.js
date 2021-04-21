import React, { useState } from 'react';
import { SecondaryContainer, FilterText, CategoryFilter, SortByFilter, Button, Card, CategoryContainer } from './SecondaryFilterElement';

import CheckBox from '../Pages/Checkbox';

const SecondaryFilter = () => {
    const [state, setState] = useState(false);
    const toggle = (e) => {
        setState(!state);
    }
    return (
        <>
            <SecondaryContainer>
                <FilterText>Filters</FilterText>
                <CategoryContainer>
                <CategoryFilter>
                    <Button onClick = { (e) => toggle(e)}>Bundle</Button>
                    <Button onClick = { (e) => toggle(e)} >Country of Origin</Button>
                    <Button onClick = { (e) => toggle(e)}>Size</Button>

                    
                </CategoryFilter>
                { state &&
                    <Card>
                        <CheckBox />
                    </Card>
                }
                </CategoryContainer>
                <SortByFilter>Sort Filter</SortByFilter>
                
            </SecondaryContainer>  
        </>
    )
}

export default SecondaryFilter
