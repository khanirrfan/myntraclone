import React, { useState, useEffect } from 'react';
import Filter from '../Layout/Filter/Filter';
import Items from '../Layout/Items/Items';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

import { BreadcrumbContainer, Container, FilterContainer, ItemContainer, HomeContainer } from './HomeElement';

import data from '../Shared/Data/data.json'
const Home = () => {
    const [state, setstate] = useState();

    useEffect(() => {
        setstate(data);
    }, []);
    console.log(state);

    const getFilter = () => {
        console.log("hello from filter")
    }
    return (

        <HomeContainer>
            <BreadcrumbContainer>
                <Breadcrumb />
            </BreadcrumbContainer>

            <Container>

                <FilterContainer>
                    { state &&
                        <Filter items={ state.results.filters } filterChange = {(e) => getFilter(e)}/>
                    }
                </FilterContainer>

                <ItemContainer>
                    { state &&
                        <Items element={ state.results.products } sortFilter={ state.sort } />
                    }
                </ItemContainer>
            </Container>
        </HomeContainer>
    )
}

export default Home
