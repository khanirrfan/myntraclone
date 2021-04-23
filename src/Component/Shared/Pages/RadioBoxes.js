import React from 'react'
import { Lists, InputCheckbox } from './SharedPagesElement'
const RadioBoxes = ({item, getGender}) => {

// console.log(item);
    return (
        <div>
        <Lists>
            <InputCheckbox type = "radio" value ={item.value} name ={item.id} onChange = {getGender}/> 
            {
                item.value.toUpperCase()
            }            
        </Lists>
        </div>
    )
}

export default RadioBoxes
