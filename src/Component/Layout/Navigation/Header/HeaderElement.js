import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

export const HeaderLogo = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  top: 0;
  position: sticky;
  width: 100%;
  font-size: 1rem;
  z-index: 10;
  background-color:#fff;
  border-bottom: 1px solid red;

  @media screen and (max-width: 950px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 80px;
  z-index: 1;
  width: 100%;
`;
export const NavLogo = styled(LinkR)`
  cursor: pointer;
  margin-left: 1.4%;
  width: 100px;
  height: 70px;
`;

export const NavHeader = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

export const LogoContainer = styled.div`
  width: 100%;
`;

export const LogoImage = styled(Logo)`
  width: 100px;
  height: 70px;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 auto;
`;

export const NavMenuItems = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InfoCard = styled.div`
  height:30px;
  background-color: #343434;
  position: absolute;
  margin-top:80px;
`;
export const NavProfile = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 auto;
`;

export const NavProfileItems = styled(LinkR)`
  text-decoration: none;
  color:#000;
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;