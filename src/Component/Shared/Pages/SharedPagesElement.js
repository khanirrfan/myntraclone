import styled from "styled-components";

export const Lists = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin:5px;
  
  font-size:1rem;
  cursor: pointer;
`;
export const Input = styled.input.attrs({type:'checkbox'})`
  cursor:pointer;
  margin-right:10px;
  width: 30px;
  height:20px;
`;

export const InputCheckbox = styled.input.attrs({type:'radio'})`
  cursor:pointer;
  margin-right:10px;
  width: 30px;
  height:20px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const Buttons = styled.div`

  padding: 2px;
  margin: 2px;
  border:none;
  cursor: pointer;
  
  `;
export const SelectHeader = styled.div`
    /* margin:5px; */
`;
export const SelectList = styled.ul`
    display:inline;
    list-style-type: none;
    padding:10px;
    
`;
export const SelectTitle = styled.div`

  `;
export const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2px;
  margin: 2px;
  border: 1px solid red;
  background-color:#fff;
  border-radius: 4px;
`;
export const ButtonsList = styled.li`
    padding:8px;
    cursor: pointer;

    &:hover{
        background-color:lightgrey;
    }
`;
export const Wrapper = styled.p`
    border-radius: 10px;
    padding: 0 10px;
    width: 60px;

  &:hover{
    background-color:lightgrey;
    /* max-width:70px; */
    
  }
`;