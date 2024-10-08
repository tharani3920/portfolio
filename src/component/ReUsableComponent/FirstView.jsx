import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import img from "../../assets/my1.jpeg";
import TypeWriter from "./TypeWriter";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import { gsap } from "gsap";
import {
  MdOutlineMailOutline,
  MdLocalPhone,
  MdOutlineHome,
  MdCalendarMonth,
} from "react-icons/md";

const FirstView = () => {
  useEffect(() => {
    const rl = gsap.timeline({ defaults: { ease: "power1.in" } });
    rl.from(".my-details", { y: 50, opacity: 0, duration: 0.5, delay: 1 });
    rl.from(".my-img", { x: 50, opacity: 0, duration: 0.5, delay: 1 });
  });
  return (
    <>
      <div className="first-view-back pt-5 ">
        <div className="container bg-white p-4 rounded white-div">
          <Container className="">
            <Row>
              <Col sm={12} md={7} className="my-details">
                <div className="mt-5">
                  <div style={{ height: "40px" }}>
                    <TypeWriter />
                  </div>
                  {/* <h6>HELLO EVERYBODY, I AM</h6> */}
                  <p className="fw-bolder my-name">Tharani M</p>
                  <h6 className="mb-4">WEB DEVELOPER</h6>
                  <p className="my-descri">
                    I am a web alchemist, blending code with creativity to craft
                    responsive masterpieces, while thriving in the collaborative
                    symphony of teamwork.
                  </p>
                  <ul className="list-group mb-5 ms-3">
                    <li className="d-flex align-items-center mt-2 hover-eff">
                      <MdCalendarMonth className="me-3 my-icons" />
                      <span className="my-info"> 3rd September, 2000</span>
                    </li>
                    <li className=" d-flex align-items-center mt-2 hover-eff">
                      <MdOutlineMailOutline className="me-3 my-icons" />
                      <span className="my-info">tharani3920@gmail.com</span>
                    </li>
                    <li className=" d-flex align-items-center mt-2 hover-eff">
                      <MdLocalPhone className="me-3 my-icons" />
                      <span className="my-info">+91 6374256889</span>
                    </li>
                    <li className=" d-flex align-items-center mt-2 hover-eff">
                      <MdOutlineHome className="me-3 my-icons" />
                      <span className="my-info">50, Kongu Nagar, Erode.</span>
                    </li>
                  </ul>
                  <CDBBox
                    display="flex"
                    style={{ width: "250px" }}
                    // className="mt-3"
                  >
                    <CDBBtn
                      flat
                      outline
                      color="light"
                      className="me-auto p-2 my-links"
                    >
                      <a href="https://www.facebook.com/tharani.matheshwaran?mibextid=ZbWKwL">
                        <CDBIcon fab icon="facebook-f" />{" "}
                      </a>
                    </CDBBtn>
                    <CDBBtn
                      flat
                      outline
                      color="light"
                      className="me-auto p-2 my-links"
                    >
                      <a href="https://www.linkedin.com/in/tharani3920/">
                        <CDBIcon fab icon="linkedin-in" />
                      </a>
                    </CDBBtn>
                    <CDBBtn
                      flat
                      outline
                      color="light"
                      className="me-auto p-2 my-links"
                    >
                      <a href="https://www.instagram.com/tharanimatheswaran?igsh=NDAybmZja3k0cWh4">
                        <CDBIcon fab icon="instagram" />
                      </a>
                    </CDBBtn>
                  </CDBBox>
                </div>
              </Col>
              <Col sm={12} md={5}>
                {/* <img
                  src={img}
                  alt="tharani img"
                  height="100%"
                  width="100%"
                  className="rounded my-img"
                /> */}
                <div className="rounded my-img"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default FirstView;
