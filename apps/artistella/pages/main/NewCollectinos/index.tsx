import React from 'react';
import Link from 'next/link';
import GridElm from './newElement';
import {GridDiv,TopDiv,GridTitle,MoreButton,Grid} from './style';

function NewCollectinos(){
  return(
    <GridDiv>
      <TopDiv>
        <GridTitle>New Collections</GridTitle>
        <MoreButton>
          <Link href={`/moreItem`}>
            <a>More</a>
          </Link>
        </MoreButton>
      </TopDiv>
      <Grid>
        {
          data.map( (data, index) =>
            <GridElm key={index} img={data.img} header={data.header} text={data.text} date={data.date} />
          )
        }
      </Grid>
    </GridDiv>
  )
}


const data =[
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },

]


export default NewCollectinos;
