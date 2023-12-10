import React from "react";
import { Container } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";

const Premium = () => {
  return (
    <>
      <Container className="top">
        <h2 className="title mb-5">Premium plans include</h2>
        <div className="premiumList">
          <ul>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>Drag & drop HTML5 editor</span>
            </li>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>Best 3D Text & Shape editor</span>
            </li>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>Unlimited fonts</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>No Watermark</span>
            </li>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>Unlimited stock images</span>
            </li>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>1000+ stunning templates</span>
            </li>
          </ul>

          <ul>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>Ad-free editing experience</span>
            </li>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>Cloud storage of design</span>
            </li>
            <li>
              <span className="mx-3">
                <CiEdit className="icon" />
              </span>
              <span>500+ Vector cliparts & stickers</span>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Premium;
