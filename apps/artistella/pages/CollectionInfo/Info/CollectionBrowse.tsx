import React from 'react';
import InfoNumber from './collectionInfoNumber';
import {Div,PhotoDiv,Photo,Name,ArtistGrid,Content} from '../style';



function CollectionBrowse({profile,name,content}){
  return(
    <Div>
      <PhotoDiv>
        <Photo src={profile}/>
      </PhotoDiv>
      <Name>{name}</Name>
      <ArtistGrid>
          <InfoNumber info='FLOOR PRICE' number='0.25 SOL'/>
          <InfoNumber info='TOTAL VOLUME' number='387.57 SOL'/>
          <InfoNumber info='AVG SALE PRICE' number='0.50 SOL'/>
          <InfoNumber info='TOTAL LISTED COUNT' number='335'/>
      </ArtistGrid>
      <Content>{content}</Content>
    </Div>
  )
}


export default CollectionBrowse;