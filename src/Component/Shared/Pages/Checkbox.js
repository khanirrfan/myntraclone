import React from 'react'
import { Lists,Input } from '../../Shared/Pages/SharedPagesElement';
const Checkbox = ({item, getFilterType}) => {
console.log(item)
    return (
        <>
            <Lists>
                <Input value ={ item.value} name ={item.id} type="checkbox" onChange ={ getFilterType}/> { item.value}
            </Lists>
        </>
    )
}

export default Checkbox;
