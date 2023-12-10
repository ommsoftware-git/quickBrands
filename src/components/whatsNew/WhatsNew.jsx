/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhatsNew = () => {
  return (
    <>
      <section className="terms mb-5">
        <Container fluid>
          <div className="mb-5">
            <h2>Product Updates</h2>
            <p className="text-white text-center mt-3">
              Discover all the new stuff we’ve worked in a chronological order
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <Row className="gy-4 mb-5">
          <Col xs={12} lg={6}>
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/7hTM6a1YPPc"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} lg={6}>
            <h2>Graph Maker | Create Chart Diagrams For Free!!</h2>
            <p>
              Create a custom chart or diagram in minutes. Choose one of our
              pre-designed graph templates and customize it in minutes. Enter
              new data in a simple table or upload your own sheet. Create bar
              charts, line charts or pie charts online and share with friends.
              Create your first chart in a matter of minutes.
            </p>
          </Col>
        </Row>
        <Row className="gy-4 mb-5">
          <Col xs={12} lg={6}>
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/BKNqFhe4-4A"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} lg={6}>
            <h2>QR Code Generator | Create a QR Code</h2>
            <p>
              Create QR Codes for your business, school, or even personal use.
              Our tool is easy to use with absolutely no design skills
              necessary. In seconds, you will learn how to create free QR Codes
              for use on any print or digital mediums. With
            </p>
          </Col>
        </Row>
        <Row className="gy-4 mb-5">
          <Col xs={12} lg={6}>
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/scl8nYBez7U"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} lg={6}>
            <h2>Barcode Generator | Create Barcode</h2>
            <p>
              Whether you're designing product labels or organizing your supply
              chain, adding barcodes shouldn't be difficult. Use PhotoADKing to
              create single or multiple barcodes using our free barcode
              generator tool.
            </p>
          </Col>
        </Row>
        <Row className="gy-4 mb-5">
          <Col xs={12} lg={6}>
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/iLcJC0hhXz0"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} lg={6}>
            <h2>Organize Your Work At One Place With Folders</h2>
            <p>
              • Have a hassle-free experience with an organized folder structure
              • Manage different projects with dedicated folders for easy
              storage &amp; access • Create a separate folder for any project
              you attempt so you never create a mess while searching for a
              particular template • This is as simple as you manage your folders
              on your PC or Smartphone
            </p>
          </Col>
        </Row>
        <Row className="gy-4 mb-5">
          <Col xs={12} lg={6}>
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/FpP7Q4-ECl0"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} lg={6}>
            <h2>New Background Cropper To Keep The Goodness</h2>
            <p>
              • Don’t want to remove the background completely? Crop what you
              want to keep with go-to Background Cropper • Crop any given image
              on your template with easy to use Background Cropper Just select
              the Image &amp; Go to Background &amp; select Editor - Crop/Erase
              - Crop • Select the area that you want to keep &amp; hit Save •
              The original image will be replaced with the edited one
              immediately
            </p>
          </Col>
        </Row>
        <Row className="gy-4 mb-5">
          <Col xs={12} lg={6}>
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/GW0rEkTjOw4"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} lg={6}>
            <h2>Striking SVG Color Editor – Your Exotic Color Palette</h2>
            <p>
              • Optimized SVG Editor eases your work with peppy colors readily
              applied to fonts, shapes or any template element • Want to change
              any default template color? Try SVG Editor • Paint any element
              with solid colors or gradient effects • Add a stroke or set the
              desired opacity in an uncluttered way
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhatsNew;
