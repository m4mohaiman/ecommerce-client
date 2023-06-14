import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'

const Homepage = () => {
  return (
    <div>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
    </div>
  )
}

export default Homepage