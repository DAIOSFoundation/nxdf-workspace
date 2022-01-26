import Link from 'next/link';
import React from 'react';
import {MenudivIn,MenuDiv} from './style';



function MenuIn({child}) {
    return(
        <MenudivIn>
            <MenuDiv>
                <Link href={`/${child}`}>
                  <a>{child.toUpperCase()}</a>
                </Link>
            </MenuDiv>
        </MenudivIn>)
}


export default MenuIn;
