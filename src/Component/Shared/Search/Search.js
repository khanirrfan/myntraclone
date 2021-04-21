import React, {useState} from 'react'
import { SearchBar,InputSearch,SearchIcon } from './SearchElements';

const Search = (props) => {
    const [inputString, setInputString] = useState('')
    return (
        <>
            <SearchBar>
            <SearchIcon />
                <InputSearch 
                style={{width:'500px', height:"30px"}} 
                type="text" 
                placeholder = "Search products, brands and many more"
                onChange={props.handleSearch} 
                name = "search"/>
            </SearchBar>
        </>
    )
}

export default Search;
