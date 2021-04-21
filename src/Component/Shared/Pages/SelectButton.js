import React, {useState} from 'react'
import { SelectWrapper, SelectHeader, SelectTitle, SelectList, Buttons, ButtonsList } from './SharedPagesElement'
const SelectButton = ({ title, item}) => {
    const [isListOpen, setIsListOpen] = useState(false)
    console.log(title);
    const toggleList = () => {
        setIsListOpen(!isListOpen);
    }
    const selectItem =item => {
        console.log(item);
    }
    return (
        <>
            <SelectWrapper onMouseEnter ={() => toggleList()} onMouseLeave = {() => toggleList()}>
            <Buttons type="button">
                <SelectHeader>
                    <SelectTitle> Sort By : {title}
                    </SelectTitle>
                </SelectHeader>
                </Buttons>
                {isListOpen &&
                    <SelectList>
                    {item.values.map((list, index) =>{
                        return <ButtonsList 
                                    key ={index}  
                                    onClick= {() =>selectItem(list)}       
                        > {list.title} {' '}
                        </ButtonsList>
                    })
                        }
                </SelectList>}
            </SelectWrapper>
        </>
    )
}

export default SelectButton;
