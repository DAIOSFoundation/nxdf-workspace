import React from 'react';
import {MenudivIn,MenuDiv} from './style';



function MenuIn({child}) {
    return(
        <MenudivIn>
            <MenuDiv>
                <span>{child}</span>
            </MenuDiv>
        </MenudivIn>)
}


export default MenuIn;