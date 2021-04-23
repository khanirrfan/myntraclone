import React, {useState} from 'react'
import BrandsFilter from '../../Shared/Brands/BrandsFilter'
import CategoryFilter from '../../Shared/Categories/CategoryFilter'
import GenderFilter from '../../Shared/Gender/GenderFilter'

import { SectionFilter } from './FilterElement';
const Filter = ({ items, filterChange }) => {
    return (
        <>
        <p>Filters</p>
            <SectionFilter>
                { items &&
                    items.primaryFilters.map((filter, index) => {
                        return (
                            <>
                                { filter.id === "Gender" &&
                                    <GenderFilter key={ index } filter={ filter } />
                                }
                                { filter.id === "Categories" &&
                                    <CategoryFilter key={ index } filter={ filter } />
                                }
                                { filter.id === 'Brand' &&
                                    <BrandsFilter key={ index } filter={ filter } />

                                }
                            </>
                        )  
                    })

                }
            </SectionFilter>
        </>
    )
}

export default Filter
