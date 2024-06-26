import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const OfferClient = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".offer-service",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    gsap.utils.toArray(".offer-service").forEach((service, index) => {
      tl.from(service, {
        opacity: 0,
        y: 100,
        duration: 0.1,
        ease: "power3.out",
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#f9f9ff" }}>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <p
            className="my-heading fw-bolder mt-5"
            style={{ textAlign: "center" }}
          >
            OFFERINGS TO MY CLIENTS
          </p>
          <p className="offer-des">
            I offer comprehensive solutions in web development,
            graphic design, and video editing, to bring your ideas to life with
            exceptional quality and creativity. Let's collaborate to make your
            vision a reality!
          </p>
        </div>
        <Container>
          <Row className="mt-5">
            <Col md={4} xs={12}>
              <div className="offer-service">
                <FaLaptopCode className="offer-icons" />
                <p className="fw-bolder offer-icon-head">Website Development</p>
                <p className="offer-icon-des">
                  Custom website design and development tailored to your unique needs.
                  Responsive and mobile-friendly designs to ensure compatibility across all devices.
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <div className="offer-service">
                <MdOutlineDesignServices className="offer-icons" />
                <p
                  className="fw-bolder offer-icon-head"
                  style={{ textTransform: "uppercase", marginBottom: "20px" }}
                >
                  Graphic Design
                </p>
                <p className="offer-icon-des">
                Creative graphic design solutions to communicate your message effectively.
                Development of eye-catching logos, branding materials, and corporate identity designs.
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <div className="offer-service">
                <PiVideo className="offer-icons" />
                <p
                  className="fw-bolder offer-icon-head"
                  style={{ textTransform: "uppercase", marginBottom: "20px" }}
                >
                  Video Editing
                </p>
                <p className="offer-icon-des">
                Professional video editing services to bring your vision to life.
                Adding visual effects, transitions, and animations to enhance the overall presentation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OfferClient;
