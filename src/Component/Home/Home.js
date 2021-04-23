import React, { useState, useEffect } from 'react';
import Filter from '../Layout/Filter/Filter';
import Items from '../Layout/Items/Items';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

import { BreadcrumbContainer, Container, FilterContainer, ItemContainer, HomeContainer } from './HomeElement';

import { useStateValue } from '../Shared/StateProvider/StateProvider';
const Home = () => {
    const [state, setstate] = useState();
    const [{ homeData, bag, wishlist }, dispatch] = useStateValue();

    useEffect(() => {
        setstate(homeData);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    const getFilter = () => {
    }


    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    let isMobile = (width <= 920);
    return (

        <HomeContainer>
            <BreadcrumbContainer>
                <Breadcrumb />
            </BreadcrumbContainer>

            <Container>

                { !isMobile &&
                    <FilterContainer>
                        { state &&
                            <Filter items={ state.results.filters } filterChange={ (e) => getFilter(e) } />
                        }
                    </FilterContainer>
                }

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
