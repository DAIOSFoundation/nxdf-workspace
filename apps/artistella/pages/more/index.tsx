import React from 'react'
import {GridDiv,TopDiv,GridTitle,Grid} from './style'
import {MoreEle} from './moreEle'

function MoreGrid(){

  return(
    <GridDiv>
      <TopDiv>
        <GridTitle>Collections</GridTitle>
      </TopDiv>
      <Grid>
        { data.map((data) => 
          <MoreEle img={data.image} header={data.name} text={data.description}/>
        )}
      </Grid>
    </GridDiv>
    )
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

export default MoreGrid;