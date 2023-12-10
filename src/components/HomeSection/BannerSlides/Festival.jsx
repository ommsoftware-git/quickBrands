import React from "react";
import "./festival.css";
import { Container } from "react-bootstrap";
import BannerSlides from "./BannerSlides";

const Festival = () => {
  return (
    <>
      <Container fluid className="top" style={{ background: "#f2f2f2" }}>
        <div className="mb-4">
          <h2 className="title">Festival Calendar 2023</h2>
          <ul className="nav nav-pills" id="myTab" role="tablist">
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link active"
                id="eight-tab"
                data-bs-toggle="tab"
                data-bs-target="#eight"
                type="button"
                role="tab"
                aria-controls="eight"
                aria-selected="true"
              >
                <div>
                  <h3>8</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="nine-tab"
                data-bs-toggle="tab"
                data-bs-target="#nine"
                type="button"
                role="tab"
                aria-controls="nine"
                aria-selected="false"
              >
                <div>
                  <h3>9</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="ten-tab"
                data-bs-toggle="tab"
                data-bs-target="#ten"
                type="button"
                role="tab"
                aria-controls="ten"
                aria-selected="false"
              >
                <div>
                  <h3>10</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="eleven-tab"
                data-bs-toggle="tab"
                data-bs-target="#eleven"
                type="button"
                role="tab"
                aria-controls="eleven"
                aria-selected="false"
              >
                <div>
                  <h3>11</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="twelve-tab"
                data-bs-toggle="tab"
                data-bs-target="#twelve"
                type="button"
                role="tab"
                aria-controls="twelve"
                aria-selected="false"
              >
                <div>
                  <h3>12</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="thrtin-tab"
                data-bs-toggle="tab"
                data-bs-target="#thrtin"
                type="button"
                role="tab"
                aria-controls="thrtin"
                aria-selected="false"
              >
                <div>
                  <h3>13</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="fortin-tab"
                data-bs-toggle="tab"
                data-bs-target="#fortin"
                type="button"
                role="tab"
                aria-controls="fortin"
                aria-selected="false"
              >
                <div>
                  <h3>14</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="fiften-tab"
                data-bs-toggle="tab"
                data-bs-target="#fiften"
                type="button"
                role="tab"
                aria-controls="fiften"
                aria-selected="false"
              >
                <div>
                  <h3>15</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
            <li className="nav-item mx-2 mb-2" role="presentation">
              <button
                className="nav-link"
                id="sixten-tab"
                data-bs-toggle="tab"
                data-bs-target="#sixten"
                type="button"
                role="tab"
                aria-controls="sixten"
                aria-selected="false"
              >
                <div>
                  <h3>16</h3>
                  <p>Dec</p>
                </div>
              </button>
            </li>
          </ul>
          <div className="tab-content py-3" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="eight"
              role="tabpanel"
              aria-labelledby="eight-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="nine"
              role="tabpanel"
              aria-labelledby="nine-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="ten"
              role="tabpanel"
              aria-labelledby="ten-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="eleven"
              role="tabpanel"
              aria-labelledby="eleven-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="twelve"
              role="tabpanel"
              aria-labelledby="twelve-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="thrtin"
              role="tabpanel"
              aria-labelledby="thrtin-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="fortin"
              role="tabpanel"
              aria-labelledby="fortin-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="fiften"
              role="tabpanel"
              aria-labelledby="fiften-tab"
            >
              <BannerSlides />
            </div>
            <div
              className="tab-pane fade"
              id="sixten"
              role="tabpanel"
              aria-labelledby="sixten-tab"
            >
              <BannerSlides />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Festival;
