import Slider from "react-slick";
import styled from "styled-components";
import { SubElmP } from "./moreElement";

const SlideDiv=styled.div`
  background-color:#faf8f4;
  margin-top:4px;
  border-radius:8px;
  padding: 30px 0px;
`
function MoreSlide() {
   
    const setting={
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:4,
        arrows:true
    };
    return  (
        <SlideDiv>
        <Slider {...setting}>
            {collectionData.map( (data,index) => 
            <SubElmP key={index} img={data.img} header={data.title} text={data.content} price={data.price} />
            )}
        </Slider>
        </SlideDiv> 
    )
    }

    const collectionData = [
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      },
      {
        img:'images/grid.png',
        title:'lorem ipsum',
        content:'Reprehenderit do adipisicing aute sint cupidatat id commodo ipsum id occaecat.',
        price:'1.4'
      }
    ]
    

export default MoreSlide;