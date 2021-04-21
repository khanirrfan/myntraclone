import styled from "styled-components";
import { IoMdSearch } from 'react-icons/io'

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin:0 auto;
  /* line-height: 24px; */
`;

export const InputSearch = styled.input.attrs({type:'text'})`
  padding-left:20px;
  border-radius:4px;
`;

export const SearchIcon = styled(IoMdSearch)`
  position: relative;
  left:20px;
  z-index:999;
`;