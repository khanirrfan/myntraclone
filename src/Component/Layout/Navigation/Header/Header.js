import React, {useState} from 'react';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import Search from '../../../Shared/Search/Search';
import { useStateValue } from '../../../Shared/StateProvider/StateProvider';
import { Nav, NavbarContainer, NavLogo, LogoImage, NavMenu, NavMenuItems, NavProfile, NavProfileItems } from './HeaderElement.js';


const Header = () => {
    const [{bag}, dispatch] = useStateValue();
    const [searchInput, setSearchInput] = useState('')
    console.log(bag);
    const getInputData = (e) =>{
        console.log("Hello from search", e.target.value);
        let data = e.target.value;

        setSearchInput(data);
        console.log(searchInput);
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
                <Search handleSearch ={(e) => getInputData(e) }/>
                <NavProfile>
                    <NavProfileItems>
                        Profile
                </NavProfileItems>
                    <NavProfileItems>
                        WishList
                    </NavProfileItems>
                    <NavProfileItems to = '/checkout'>
                        Bag {bag?.length }
                    </NavProfileItems>
                </NavProfile>
            </NavbarContainer>
        </Nav>
    </>
)}

export default Header;