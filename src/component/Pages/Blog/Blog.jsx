import React from "react";
import Breadcrumbs from "../../ReUsableComponent/Breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Breadcrumbs />
      <div>
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
    </div>
  );
};

export default Blog;
