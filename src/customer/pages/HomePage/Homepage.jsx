import React from 'react'
import MainCarousel from '../../components/homecarousel/MainCarousel'
import Homesectioncarousel from '../../components/homesectioncarousel/Homesectioncarousel'
import { mens_kurta } from '../../../data/mens_kurta'
import { mens_jeans } from '../../../data/mens_jeans'
import { women_dress } from '../../../data/women_dress'
import { women_tops } from '../../../data/women_tops'
import { womens_pants } from '../../../data/womens_pants'




const Homepage = () => {
  return (
    <div>
    <MainCarousel/>

      <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
        <Homesectioncarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <Homesectioncarousel data={mens_jeans} sectionName={"Men's Jeans"}/>
        <Homesectioncarousel data={women_dress} sectionName={"Women's Dress"}/>
        <Homesectioncarousel data={women_tops} sectionName={"Women's Tops"}/>
        <Homesectioncarousel data={womens_pants} sectionName={"Women's Pants"}/>

      </div>
    </div>
  )
}

export default Homepage
