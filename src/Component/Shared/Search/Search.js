import React, {useState} from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import { SearchBar,InputSearch,SearchIcon } from './SearchElements';

const Search = ({value, handleChangeQuery, handleSearch}) => {
    const [{bag}, dispatch] = useStateValue();
    const [inputString, setInputString] = useState('');
    const searchString = (e) => {
        console.log(e.target.value);
        setInputString()
        dispatch({
            type:'SEARCH',
            payload:e.target.value
        })
    }
    return (
        <>
            <SearchBar>
            <SearchIcon />
                <InputSearch 
                style={{width:'500px', height:"30px"}} 
                type="text" 
                placeholder = "Search products, brands and many more"
                onChange = {(e)=>handleChangeQuery(e)}
                name = "search"/>
            </SearchBar>
        </>
    )
}

export default Search;
