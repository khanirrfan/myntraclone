import React, {useState} from 'react';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import Search from '../../../Shared/Search/Search';
import { useStateValue } from '../../../Shared/StateProvider/StateProvider';
import { Nav, NavbarContainer, NavLogo, LogoImage, NavMenu, NavMenuItems, NavProfile, NavProfileItems } from './HeaderElement.js';


const Header = () => {
    const [{bag, wishlist}, dispatch] = useStateValue();
    const [searchQuery, setSearchQuery] = useState("")
    // console.log(bag);
    const handleChangeQuery = (e) => {
        setSearchQuery(e.target.value)
        console.log(searchQuery);
        dispatch({
            type:"SEARCH",
            payload:searchQuery
        })

    }
    const handleSearch = () => {
        // dispatch({
        //     type:"SEARCH",
        //     payload:searchQuery
        // })
    }
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <LogoImage>
                        <Logo />
                    </LogoImage>
                </NavLogo>
                <NavMenu>
                    <NavMenuItems>
                        Men
                </NavMenuItems>
                    <NavMenuItems>
                        Women
                </NavMenuItems>
                    <NavMenuItems>
                        Kids
                </NavMenuItems>
                    <NavMenuItems>
                        Home & Living
                </NavMenuItems>
                    <NavMenuItems>
                        Offers
                </NavMenuItems>
                </NavMenu>
                <Search 
                    value = {searchQuery}
                    handleChangeQuery = {handleChangeQuery}
                    handleSearch = {handleSearch}/>
                <NavProfile>
                    <NavProfileItems>
                        Profile
                </NavProfileItems>
                    <NavProfileItems to ="/wishlist">
                        WishList {wishlist?.length}
                    </NavProfileItems>
                    <NavProfileItems to = "/checkout">
                        Bag {bag?.length }
                    </NavProfileItems>
                </NavProfile>
            </NavbarContainer>
        </Nav>
    </>
)}

export default Header;