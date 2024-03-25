import React, { useState } from "react";
import FirstView from "../ReUsableComponent/FirstView";
import AboutMY from "../ReUsableComponent/AboutMY";
import { Col, Container, Row } from "react-bootstrap";
import OfferClient from "../ReUsableComponent/OfferClient";
import { MdLocalPhone, MdOutlineHome, MdOutlineMailOutline } from 'react-icons/md'


const Home = () => {
  const [selectedTab, setSeclectedTab] = useState('experience')
  const handlealert = () => {
    window.alert("Just only design Not Functional")
  }
  return (
    <>
      <FirstView />
      <div id="About">
     <AboutMY />
     </div>
     <section>
      <div className="edu-exp-sec">
        <Container>
          <div className=" d-flex justify-content-center edu-exp-bdiv ">
            <button className={`exp-btn ${selectedTab === 'experience' ? "selected" : ""}`}  onClick={() => setSeclectedTab('experience')}>My Experience</button>
            <button className={`exp-btn ${selectedTab === 'education' ? "selected" : ""}`}  onClick={() => setSeclectedTab('education')}>My Education</button>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="middle-line">
            </div>
            {selectedTab ==='experience' ? (
            <>
              <div className="myexperience-div">
                <div className="year">May 2023 to present</div>
                <div className="indicator"></div>
                <div className="year-data" ><h5>PeerMe Software Technology Pvt., Ltd.,</h5>
                <p>Associate Software Developer</p></div>
              </div>
              <div className="myexperience-div" style={{marginTop:"9rem"}}>
                <div className="year">Jan 2023 to Apr 2023</div>
                <div className="indicator"></div>
                <div className="year-data"><h5>PeerMe Software Technology Pvt., Ltd.,</h5>
                <p>Intern</p></div>
              </div>
              <div className="myexperience-div" style={{marginTop:"17rem"}}>
                <div className="year">Apr 2021 to Dec 2022</div>
                <div className="indicator"></div>
                <div className="year-data"><h5>Freelancer</h5>
                <p>Frontend Web Developer</p></div>
              </div>
              </>
              ) :(<>
                <div className="myexperience-div">
                  <div className="year">May 2021 to Apr 2023</div>
                  <div className="indicator"></div>
                  <div className="year-data" ><h5>MCA</h5>
                  <p>Kongu Arts and Science College.</p></div>
                </div>
                <div className="myexperience-div" style={{marginTop:"9rem"}}>
                  <div className="year">May 2018 to Mar 2021</div>
                  <div className="indicator"></div>
                  <div className="year-data"><h5>B.Sc (Computer Science)</h5>
                  <p>Kongu Arts and Science College.</p></div>
                </div>
                <div className="myexperience-div" style={{marginTop:"17rem"}}>
                  <div className="year">May 2017 to Apr 2018</div>
                  <div className="indicator"></div>
                  <div className="year-data"><h5>12th (Bio)</h5>
                  <p>Vivekananda Vidhayala Matric Hr., Sec., School.</p></div>
                </div>
                </>)}
          </div>
        </Container>

      </div>
     </section>
     <div id="Services">
     <OfferClient />
     </div>
     <div id="Blogs" className="blog-s">
     <div className="d-flex justify-content-center flex-column align-items-center">
          <p
            className="my-heading fw-bolder mt-5"
            style={{ textAlign: "center" }}
          >
            Blogs
          </p>
          </div>
        <Container>
          <Row className="mt-5 mb-5">
            <Col md={6} lg={4} xs={12}>
              <div className="blog-img">
                <div className="inside-blog-img d-flex align-items-center justify-content-center">
                  <p className="blog-name">Food</p>
                  <p className="blog-name-des">Let the food be finished</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} xs={12}>
              <div className="blog-img blog-img-alt">
                <div className="inside-blog-img d-flex align-items-center justify-content-center ">
                  <p className="blog-name">Travelling</p>
                  <p className="blog-name-des">Travelling is my Therapy</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} xs={12}>
              <div className="blog-img blog-img-alt1">
                <div className="inside-blog-img d-flex align-items-center justify-content-center">
                  <p className="blog-name">Family</p>
                  <p className="blog-name-des">The heart of the Home</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="Contact">
      <div className="d-flex justify-content-center flex-column align-items-center">
          <p
            className="my-heading fw-bolder mt-5"
            style={{ textAlign: "center" }}
          >
            Contact Me
          </p>
          </div>
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
    </>
  );
};

export default Home;
