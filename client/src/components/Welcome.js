import React from 'react'
import Image from '../assets/Mic.webp'
import Footer from './Footer'

const Welcome = ({setCurrentPage}) => {
  return (
    <><img src={ Image }></img><div>
      <Footer />
    </div></>
  )
}

export default Welcome