import React from 'react';
import { SubElm } from './subElm';
import {GridDiv,TopDiv,GridTitle,MoreButton,Grid} from './style';

function PopularCollections(){
 
  return(
    <GridDiv>
      <TopDiv>
        <GridTitle>Popular Collections</GridTitle>
        <MoreButton>More</MoreButton>
      </TopDiv>
      <Grid>
        { data.map((data,index) => 
          <SubElm key={index} img={data.image} header={data.name} text={data.description}/>
        )}
      </Grid>
    </GridDiv>
  )
}

function MoreClick(e){
  e.preventDefault();
  return (window.location.assign("/collections/popular"))
}

const data=[
  {
      image : "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image : "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image : "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image : "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image : "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image : "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image: "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  },
  {
      image: "images/grid.png",
      name : "Lorem Ipsum",
      description: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore."
  }
]
export default PopularCollections;