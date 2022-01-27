import React from 'react';
import CollectionBrowse from './Info/CollectionBrowse';
import BrowseMain from './main/CollectionMain';
import CollectionTop from './ColletionTop'


function CollectionInfo(){
  return(
    <div>
        <CollectionBrowse profile='images/itemList/profile.png' name='lorem ipsum' content='Proident non nostrud laborum excepteur reprehenderit minim ex ullamco.'/>
        <CollectionTop/>
        <BrowseMain />
    </div>
    )
}

export default CollectionInfo;