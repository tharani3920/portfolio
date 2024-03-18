import React from 'react'
import Breadcrumbs from '../../ReUsableComponent/Breadcrumbs'
import { Col, Container, Row } from 'react-bootstrap'
import { MdLocalPhone, MdOutlineHome, MdOutlineMailOutline } from 'react-icons/md'

const Contact = () => {

  const handlealert = () => {
    window.alert("Just only design Not Functional")
  }

  return (
    <div>
      <Breadcrumbs />
      <div className='container mt-5 pb-5 d-flex justify-content-center'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62589.3714598973!2d77.67411115865775!3d11.3467074362816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710598809396!5m2!1sen!2sin" width="1100" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container className='pb-5'>
      <Row>
        <Col md={4} xs={12}><ul> <li className=" d-flex align-items-center mt-2 hover-eff hovers-eff">
                      <MdOutlineMailOutline className="me-3 my-icons" />
                      <span className="my-info">tharani3920@gmail.com</span>
                    </li>
                    <li className=" d-flex align-items-center mt-2 hover-eff hovers-eff">
                      <MdLocalPhone className="me-3 my-icons" />
                      <span className="my-info">+91 6374256889</span>
                    </li>
                    <li className=" d-flex align-items-center mt-2 hover-eff hovers-eff">
                      <MdOutlineHome className="me-3 my-icons" />
                      <span className="my-info">50, Kongu Nagar, Erode.</span>
                    </li>
                  </ul></Col>
        <Col md={4} xs={12}>
          <div>
            <input type='text' placeholder='Enter your Name' className='contact-input mt-4' />
            <input type="email" placeholder='Enter Email Address' className='contact-input' />
            <input type='text' placeholder='Enter Subject' className='contact-input' />
          </div>
        </Col>
        <Col md={4} xs={12}> <textarea  placeholder='Enter Message' className='contact-input mt-4' style={{height:'100px'}} />
        <button className='send-mess' onClick={handlealert}> Send Message</button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Contact