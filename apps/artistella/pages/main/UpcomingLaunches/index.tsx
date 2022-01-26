import React from 'react';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { PagElm } from './pagElm';
import {PagRayout,PageTitleDiv,PagTitle,PageSlider} from './style';



function UpcomingLaunches(){
  const setting={
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    arrows:false
  };
  return(
    <PagRayout>
          <PageTitleDiv>
            <PagTitle>Upcoming Launches</PagTitle>
          </PageTitleDiv>
          <PageSlider {...setting}>
              {data.map((data, index) =>
                <PagElm key={index} img={data.img} header={data.header} text={data.text} />
              )}
          </PageSlider>
    </PagRayout>
  )
}


const data = [
  {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
img : "images/grid.png",
header : "Lorem Ipsum",
text: "lorem ipsum"
},
{
img : "images/grid.png",
header : "Lorem Ipsum",
text: "lorem ipsum"
},
{
img : "images/grid.png",
header : "Lorem Ipsum",
text: "lorem ipsum"
},
]

export default UpcomingLaunches;
