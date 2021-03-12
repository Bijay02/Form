import React, { Component } from "react";
import { Text } from "@blueprintjs/core";
import { Row, Col } from "react-flexbox-grid";
import "./index.scss";
/** Thank You Component */
export const ThankYou = () => {
  return (
    <div class="thank-you-container">
      <Row>
        <Col xs={12}>
          <Row start="xs" center="md">
            <Col xs={12}>
              <h4 style={{ fontWeight: "normal" }}>
                Thank you! Your registration is confirmed.
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Text className="bp3-text">
            Click the button below to add the session to your calendar.
          </Text>
        </Col>
      </Row>
      <div className="reset-margin-container">
        <Row
          style={{
            marginLeft: "0px",
            marginRight: "0px",
            padding: "16px 8px",
          }}
        >
          <Col xs={12}>
            <span>
              <span className=" brand-navy-blue text-bold">
                XIAFLEX
                <sup className="reg_mark">®</sup> Training and Certification
                with expert,{" "}
              </span>{" "}
              Dr. Prosper Benhaim
            </span>
            <div>
              <span className="text-bold">Date:</span>{" "}
              <span className="brand-grey">Tuesday, April 13</span>
            </div>
            <div>
              <span className="text-bold">Time:</span>{" "}
              <span className="brand-grey">8:00 PM – 9:30 PM EST, 2021</span>
            </div>
            <div className="padding-top padding-bottom">
              <a class="add-to-calendar" href="calendar/invite.ics" download>
                ADD TO CALENDAR
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
