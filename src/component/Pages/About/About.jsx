import React from 'react'
import Breadcrumbs from '../../ReUsableComponent/Breadcrumbs'
import AboutMY from '../../ReUsableComponent/AboutMY'

const About = () => {
  return (
    <>
    <Breadcrumbs />
    <div className='mt-5'>
      <AboutMY />
    </div>
    </>
  )
}

export default About