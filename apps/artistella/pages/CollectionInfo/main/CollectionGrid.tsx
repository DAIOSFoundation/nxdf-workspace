import React from 'react';
import { SubElmB } from './CollectionEle';
import {GridDiv,Grid,ShapeProps} from '../style';

function BrowseGrid(props:ShapeProps) {
  return (
    <GridDiv>
      <Grid shape={props.shape}>
        {
          collectionData.map((data,index) =>
            <SubElmB key={index} img={data.img} header={data.title} text={data.content} price={`${data.price} SOL`} />
          )
        }
      </Grid>
    </GridDiv>
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

export default BrowseGrid;