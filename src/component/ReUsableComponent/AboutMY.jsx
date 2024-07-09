import React, { useEffect, useRef } from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { BiCoinStack } from "react-icons/bi";
import { LuBookMinus } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import resume from "../../assets/tharani_c.v.pdf";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutMY = () => {
  const progressBarsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    progressBarsRef.current.forEach((progressBar, index) => {
      gsap.from(progressBar, {
        scrollTrigger: {
          trigger: progressBar,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reset play reset",
        },
        scaleX: 0,
        duration: 1,
        delay: index * 0.2,
      });
    });
  }, []);
  return (
    <div>
      <section className="container" style={{ marginBottom: "2rem" }}>
        <Row>
          <Col sm={12} md={6} className="media-col">
            <div>
              <p className="my-heading fw-bolder">About Myself</p>
              <p className="my-descri">
                As a dedicated web developer proficient in the MERN stack, I
                seamlessly blend creativity with technical expertise to craft
                innovative digital solutions that captivate audiences and drive
                engagement.
              </p>
              <div>
                <a
                  className="dedcription-btn"
                  href={resume}
                  download="Tharani CV"
                >
                  <span className="name-descripeion">Download CV</span>
                  <div className="btn-icon">
                    <i>
                      {" "}
                      <FaDownload />{" "}
                    </i>
                  </div>
                </a>
              </div>
              <Row>
                <Col sm={12} md={4}>
                  <div className="about-div">
                    <span className="about-icon">
                      <BiCoinStack />
                    </span>
                    <h4 style={{ marginTop: "10px" }}>₹3.5K</h4>
                    <p className="p-font">Total Donation</p>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className="about-div">
                    <span className="about-icon">
                      <LuBookMinus />
                    </span>
                    <h4 style={{ marginTop: "10px" }}>2</h4>
                    <p className="p-font">Total Projects</p>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className="about-div">
                    <span className="about-icon">
                      <IoMdContacts />
                    </span>
                    <h4 style={{ marginTop: "10px" }}>3</h4>
                    <p className="p-font">Total Collab</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} className="media-col">
            <p className="progress-title">Designing 85%</p>
            <div
              className="porgress-div"
              ref={(el) => progressBarsRef.current.push(el)}
            >
              <ProgressBar animated now={85} className="progress-bar-color" />
            </div>
            <p className="progress-title">Web Development 90% </p>
            <div
              className="porgress-div"
              ref={(el) => progressBarsRef.current.push(el)}
            >
              <ProgressBar animated now={90} className="progress-bar-color" />
            </div>
            <p className="progress-title">Overall Coding 79%</p>
            <div
              className="porgress-div"
              ref={(el) => progressBarsRef.current.push(el)}
            >
              <ProgressBar animated now={79} className="progress-bar-color" />
            </div>
            <p className="progress-title">Back-end 55%</p>
            <div
              className="porgress-div"
              ref={(el) => progressBarsRef.current.push(el)}
            >
              <ProgressBar animated now={55} className="progress-bar-color" />
            </div>
            <p className="progress-title">Learning Skills 80%</p>
            <div
              className="porgress-div"
              ref={(el) => progressBarsRef.current.push(el)}
            >
              <ProgressBar animated now={80} className="progress-bar-color" />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutMY;
