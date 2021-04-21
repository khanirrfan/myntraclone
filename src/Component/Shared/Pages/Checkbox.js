import React from 'react'
import { Lists,Input } from '../../Shared/Pages/SharedPagesElement';
const Checkbox = ({item}) => {
console.log(item)
    return (
        <>
            <Lists>
                <Input value ={ item.value} name ={item.id} type="checkbox" /> { item.value}
            </Lists>
        </>
    )
}

export default Checkbox;
