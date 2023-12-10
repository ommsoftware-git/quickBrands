import React from "react";
import "./help.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const HelpDetails = () => {
  return (
    <>
      <section className="terms mb-5">
        <Container fluid>
          <div className="mb-5">
            <h2>How can we help you today?</h2>
          </div>
        </Container>
      </section>
      <Container className="mb-5">
        <Card body>
          <h2 className="mb-4">How to add stock videos?</h2>
          <hr />
          <Row className="gy-4 mb-5">
            <Col xs={12} lg={12}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                quaerat ipsam architecto nisi voluptatum facilis, explicabo et
                eligendi minima voluptate deleniti consequuntur. Voluptatum fuga
                eligendi consequatur repellendus adipisci ducimus beatae quidem.
                Veritatis iste amet quisquam voluptatibus dignissimos dicta nemo
                placeat? Rerum delectus perspiciatis porro quam sint alias, vero
                optio vel.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                quaerat ipsam architecto nisi voluptatum facilis, explicabo et
                eligendi minima voluptate deleniti consequuntur. Voluptatum fuga
                eligendi consequatur repellendus adipisci ducimus beatae quidem.
                Veritatis iste amet quisquam voluptatibus dignissimos dicta nemo
                placeat? Rerum delectus perspiciatis porro quam sint alias, vero
                optio vel.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                quaerat ipsam architecto nisi voluptatum facilis, explicabo et
                eligendi minima voluptate deleniti consequuntur. Voluptatum fuga
                eligendi consequatur repellendus adipisci ducimus beatae quidem.
                Veritatis iste amet quisquam voluptatibus dignissimos dicta nemo
                placeat? Rerum delectus perspiciatis porro quam sint alias, vero
                optio vel.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                quaerat ipsam architecto nisi voluptatum facilis, explicabo et
                eligendi minima voluptate deleniti consequuntur. Voluptatum fuga
                eligendi consequatur repellendus adipisci ducimus beatae quidem.
                Veritatis iste amet quisquam voluptatibus dignissimos dicta nemo
                placeat? Rerum delectus perspiciatis porro quam sint alias, vero
                optio vel.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                quaerat ipsam architecto nisi voluptatum facilis, explicabo et
                eligendi minima voluptate deleniti consequuntur. Voluptatum fuga
                eligendi consequatur repellendus adipisci ducimus beatae quidem.
                Veritatis iste amet quisquam voluptatibus dignissimos dicta nemo
                placeat? Rerum delectus perspiciatis porro quam sint alias, vero
                optio vel.
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default HelpDetails;
