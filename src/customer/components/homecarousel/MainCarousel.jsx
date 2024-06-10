import React from 'react'
import { mainCarouselData } from './MainCarouseldata'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer '  src={item.image}/>)

  return (
    <AliceCarousel
    items={items}
    disableButtonsControls

/>
  )
}

export default MainCarousel