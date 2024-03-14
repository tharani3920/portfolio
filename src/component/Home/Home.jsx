import React, { useState } from "react";
import FirstView from "../ReUsableComponent/FirstView";
import AboutMY from "../ReUsableComponent/AboutMY";
import { Button, Container } from "react-bootstrap";
import OfferClient from "../ReUsableComponent/OfferClient";

const Home = () => {
  const [selectedTab, setSeclectedTab] = useState('experience')
  return (
    <>
      <FirstView />
     <AboutMY />
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
                <p>Junior Software Developer</p></div>
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
                  <p>Vivekandha Vidhayala Matric Hr., Sec., School.</p></div>
                </div>
                </>)}
          </div>
        </Container>

      </div>
     </section>
     <OfferClient />
    </>
  );
};

export default Home;
