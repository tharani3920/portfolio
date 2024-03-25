import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  // MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
const Footer = () => {
  return (
    <div className="footer-wrapper">
    <MDBFooter className="text-white text-lg-left bg-dark">
      <MDBContainer className="p-5">
        <MDBRow>
          <MDBCol lg="5" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About Me</h5>
            <p className="footer-p">
              As a dedicated web developer proficient in the MERN stack, I
              seamlessly blend creativity with technical expertise to craft
              innovative digital solutions that captivate audiences and drive
              engagement.
            </p>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Newsletter</h5>
            <p className="footer-p">Stay updated with our latest trends</p>
            <MDBInput
              type="text"
              id="form5Example2"
              placeholder="Email Address"
              contrast
            />

            <MDBBtn outline color="light" className="mt-4 subcribe-btn" type="button">
              Subscribe
            </MDBBtn>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Me</h5>
            <p className="footer-p">Let us be social</p>
            <CDBBox
              display="flex"
              // justifyContent="center"
              style={{ width: "100%" }}
              className="mx-auto mt-3"
            >
              <CDBBtn flat outline color="light" className="me-auto my-links p-2">
              <a href="https://www.facebook.com/tharani.matheshwaran?mibextid=ZbWKwL" >
                <CDBIcon fab icon="facebook-f" />
                </a>
              </CDBBtn>
              {/* <CDBBtn flat outline color="light" className="me-auto p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn> */}
              <CDBBtn flat outline color="light" className="me-auto my-links  p-2">
              <a href="https://www.linkedin.com/in/tharani3920/" >
                <CDBIcon fab icon="linkedin-in" />
                </a>
              </CDBBtn>
              <CDBBtn flat outline color="light" className="me-auto my-links  p-2">
              <a href="https://www.instagram.com/tharanimatheswaran?igsh=NDAybmZja3k0cWh4">
                <CDBIcon fab icon="instagram" />
                </a>
              </CDBBtn>
            </CDBBox>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3 p-font"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright :{" "}
        <a className="text-white" href="https://www.linkedin.com/in/tharani3920/">
          tharani3920@gmail.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;
