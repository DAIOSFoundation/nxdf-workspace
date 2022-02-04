import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TransImage from './transImage';
import {ImageSlider} from './style';


const images=[
  {
    id:1,
    title:'Lorem Ipsum1 ',
    summary: 'Ex nulla magna laborum nisi exercitation excepteur fugiat.',
    path: 'images/1.png'
  },
  {
    id:2,
    title:'Lorem Ipsum2',
    summary: 'Ex sint consequat fugiat sit commodo veniam voluptate duis reprehenderit veniam ea pariatur.',
    path: 'images/2.png'
  },
  {
    id:3,
    title:'Lorem Ipsum3',
    summary: 'Proident Lorem irure eu irure et.',
    path: 'images/3.png'
  },
  {
    id:4,
    title:'Lorem Ipsum4',
    summary: 'Pariatur ea ex enim cupidatat.',
    path: 'images/4.png'
  },
  {
    id:5,
    title:'Lorem Ipsum5',
    summary: 'Fugiat labore exercitation id dolore duis consectetur fugiat eiusmod.',
    path: 'images/5.png'
  }
];

export function UpcomingSlide() {
  const setting={
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows:false,
  };
  return (
    <ImageSlider>
      <Slider {...setting}>
        {images.map((data, index)=>
          <TransImage key={index} title={data.title} summary={data.summary} path={data.path} />
        )}
      </Slider>
    </ImageSlider>
  );
}

export default UpcomingSlide;
