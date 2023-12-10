import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import textData from "./textData";
import stickerData from "./stickerData";
import shapeData from "./shapeData";
import imageData from "./imageData";

const FeatureTabs = () => {
  return (
    <>
      <Container>
        <h2 className="title py-5">Quick Brands Effective Features</h2>
        <div className="featureTabs">
          <Tabs
            defaultActiveKey="text"
            id="noanim-tab-example"
            className="mb-3"
            variant="tabs"
            fill
          >
            <Tab eventKey="text" title="Text" className="mt-4 mb-5">
              <div className="row gy-4">
                {textData.map((curVal) => {
                  return (
                    <div className="col-lg-3 col-12" key={curVal.id}>
                      <Card>
                        <Card.Img
                          variant="top"
                          style={{
                            backgroundColor: "#dbe6f5",
                            width: "100%",
                            height: "200px",
                          }}
                          src={curVal.img}
                        />
                        <Card.Body>
                          <Card.Title>{curVal.name}</Card.Title>
                          <Card.Text>
                            <p>{curVal.desc.slice(0, 100)}...</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="sticker" title="Sticker" className="mt-4 mb-5">
              <Row className="gy-4">
                {stickerData.map((curVal) => {
                  return (
                    <Col xs={12} lg={3} key={curVal.id}>
                      <Card>
                        <Card.Img
                          variant="top"
                          style={{
                            backgroundColor: "#dbe6f5",
                            width: "100%",
                            height: "200px",
                          }}
                          src={curVal.img}
                        />
                        <Card.Body>
                          <Card.Title>{curVal.name}</Card.Title>
                          <Card.Text>
                            <p>{curVal.desc.slice(0, 100)}...</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Tab>
            <Tab eventKey="shape" title="Shape" className="mt-4 mb-5">
              <Row className="gy-4">
                {shapeData.map((curVal) => {
                  return (
                    <Col xs={12} lg={3} key={curVal.id}>
                      <Card>
                        <Card.Img
                          variant="top"
                          style={{
                            backgroundColor: "#dbe6f5",
                            width: "100%",
                            height: "200px",
                          }}
                          src={curVal.img}
                        />
                        <Card.Body>
                          <Card.Title>{curVal.name}</Card.Title>
                          <Card.Text>
                            <p>{curVal.desc.slice(0, 100)}...</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Tab>
            <Tab eventKey="image" title="Image" className="mt-4 mb-5">
              <Row className="gy-4">
                {imageData.map((curVal) => {
                  return (
                    <Col xs={12} lg={3} key={curVal.id}>
                      <Card>
                        <Card.Img
                          variant="top"
                          style={{
                            backgroundColor: "#dbe6f5",
                            width: "100%",
                            height: "200px",
                          }}
                          src={curVal.img}
                        />
                        <Card.Body>
                          <Card.Title>{curVal.name}</Card.Title>
                          <Card.Text>
                            <p>{curVal.desc.slice(0, 100)}...</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default FeatureTabs;
