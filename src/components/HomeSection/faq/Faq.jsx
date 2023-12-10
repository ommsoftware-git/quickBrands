import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <Container className="top">
        <h2 className="title">FAQ's</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="mb-4">
            <Accordion.Header>
              What is a social media post maker?
            </Accordion.Header>
            <Accordion.Body>
              A social media post maker is a tool or software that enables users
              to create visually appealing and engaging posts for sharing on
              various social media platforms. It provides customizable
              templates, design elements, and editing features to create
              professional-quality posts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mb-4">
            <Accordion.Header>
              How does a social media post maker work?
            </Accordion.Header>
            <Accordion.Body>
              A social media post maker typically operates through a web-based
              platform or a mobile application. Users can choose from a library
              of templates or start from scratch, customize the design by adding
              text, images, graphics, and apply various effects and styles. The
              final design can then be downloaded and shared on social media
              platforms.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mb-4">
            <Accordion.Header>
              Do I need design experience to use a social media post maker?
            </Accordion.Header>
            <Accordion.Body>
              No, you don't need design experience to use a social media post
              maker. These tools are designed to be user-friendly and intuitive,
              offering pre-designed templates and easy-to-use editing features.
              You can create professional-looking posts without any design
              skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mb-4">
            <Accordion.Header>
              Can I customize the templates in a social media post maker?
            </Accordion.Header>
            <Accordion.Body>
              Yes, PhotoADKing offers customization options. You can personalize
              the templates by adding your own text, images, logos, and
              adjusting colors, fonts, and layout to match your brand or
              campaign requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mb-4">
            <Accordion.Header>
              Can I upload my own images to use in the posts?
            </Accordion.Header>
            <Accordion.Body>
              Yes, PhotoADKing allows you to upload your own images. This
              feature enables you to include your brand assets, product photos,
              or any visuals relevant to your post's content.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mb-4">
            <Accordion.Header>
              Can I access my designs later and make changes?
            </Accordion.Header>
            <Accordion.Body>
              Yes, PhotoADKing allows you to save your designs within your
              account. You can access and edit them later, making modifications,
              adding new content, or repurposing them for future use.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
