import React, { useState } from "react";
import FirstView from "../ReUsableComponent/FirstView";
import AboutMY from "../ReUsableComponent/AboutMY";
import { Col, Container, Row } from "react-bootstrap";
import OfferClient from "../ReUsableComponent/OfferClient";
import {
  MdLocalPhone,
  MdOutlineHome,
  MdOutlineMailOutline,
} from "react-icons/md";

const Home = () => {
  const [selectedTab, setSeclectedTab] = useState("experience");
  // const handlealert = () => {
  //   window.alert("Just only design Not Functional");
  // };

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject) {
      alert("Please fill all required fields.");
      return;
    }

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzMNjxmltvAnfPzVrBAUpBKmIHsU5jKVypD4MD5ipZMAGjl0J8bjRWl7RW90jVQqXgE/exec",
        {
          method: "POST",
          body: payload,
        }
      );

      const text = await response.text();
      console.log("Response from server:", text);

      if (text.includes("Success")) {
        setResponseMsg("Form submitted successfully!");
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMsg("Submission failed.");
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <>
      <FirstView />
      <div id="About" style={{ paddingTop: "5rem" }}>
        <AboutMY />
      </div>
      <section>
        <div className="edu-exp-sec">
          <Container>
            <div className=" d-flex justify-content-center edu-exp-bdiv ">
              <button
                className={`exp-btn ${
                  selectedTab === "experience" ? "selected" : ""
                }`}
                onClick={() => setSeclectedTab("experience")}
              >
                My Experience
              </button>
              <button
                className={`exp-btn ${
                  selectedTab === "education" ? "selected" : ""
                }`}
                onClick={() => setSeclectedTab("education")}
              >
                My Education
              </button>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className="middle-line"></div>
              {selectedTab === "experience" ? (
                <>
                  <div className="myexperience-div">
                    <div className="year">Sep 2024 to Present</div>
                    <div className="indicator"></div>
                    <div className="year-data">
                      <h5>Wingslide Technologies Pvt., Ltd.,</h5>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div
                    className="myexperience-div"
                    style={{ marginTop: "9rem" }}
                  >
                    <div className="year">May 2024 to Aug 2024</div>

                    <div className="indicator"></div>
                    <div className="year-data">
                      <h5>Altruist Technologies Pvt., Ltd.,</h5>
                      <p>Bussiness Associate</p>
                    </div>
                  </div>
                  <div
                    className="myexperience-div"
                    style={{ marginTop: "17rem" }}
                  >
                    <div className="year">May 2023 to May 2024</div>
                    <div className="indicator"></div>
                    <div className="year-data">
                      <h5>PeerMe Software Technology Pvt., Ltd.,</h5>
                      <p>Associate Software Developer</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="myexperience-div">
                    <div className="year">May 2021 to Apr 2023</div>
                    <div className="indicator"></div>
                    <div className="year-data">
                      <h5>
                        MCA <span className="percent">with </span> 81%
                      </h5>
                      <p>Kongu Arts and Science College.</p>
                    </div>
                  </div>
                  <div
                    className="myexperience-div"
                    style={{ marginTop: "9rem" }}
                  >
                    <div className="year">May 2018 to Mar 2021</div>
                    <div className="indicator"></div>
                    <div className="year-data">
                      <h5>
                        B.Sc (Computer Science)
                        <span className="percent">with </span> 76%
                      </h5>
                      <p>Kongu Arts and Science College.</p>
                    </div>
                  </div>
                  <div
                    className="myexperience-div"
                    style={{ marginTop: "17rem" }}
                  >
                    <div className="year">May 2017 to Apr 2018</div>
                    <div className="indicator"></div>
                    <div className="year-data">
                      <h5>
                        12th (Bio) <span className="percent">with </span> 69%
                      </h5>
                      <p>Vivekananda Vidhayala Matric Hr., Sec., School.</p>
                    </div>
                  </div>
                </>
              )}
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
        <div className="container mt-5 pb-5 d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62589.3714598973!2d77.67411115865775!3d11.3467074362816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710598809396!5m2!1sen!2sin"
            width="1100"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Container className="pb-5">
          <Row>
            <Col md={4} xs={12}>
              <ul>
                {" "}
                <li className=" d-flex align-items-center mt-2 hover-eff hovers-eff">
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
              </ul>
            </Col>
            <Col md={4} xs={12}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="contact-input mt-4"
                  value={formData.name}
            onChange={handleChange}
                />
                <input
                  type="email"
                name="email"
                  placeholder="Enter Email Address"
                  className="contact-input"
                  value={formData.email}
            onChange={handleChange}
                />
                <input
                  type="text"
                name="subject"
                  placeholder="Enter Subject"
                  className="contact-input"
                   value={formData.subject}
            onChange={handleChange}
                />
              </div>
            </Col>
            <Col md={4} xs={12}>
              <textarea
                placeholder="Enter Message"
              name="message"
                className="contact-input mt-4"
                style={{ height: "100px" }}
                 value={formData.message}
          onChange={handleChange}
              />
              <button className="send-mess" onClick={handleSubmit}>
                {" "}
                Send Message
              </button>
              <p style={{ marginTop: "10px", color: "green" }}>{responseMsg}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
