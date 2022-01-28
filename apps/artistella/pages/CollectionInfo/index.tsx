import React from 'react';
import CollectionBrowse from './Info/collectionBrowse';
import BrowseMain from './main/collectionMain';
import CollectionTop from './colletionTop'


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