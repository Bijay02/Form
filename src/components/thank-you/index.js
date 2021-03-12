import React from "react";
import { Text, Button } from "@blueprintjs/core";
import { Row, Col } from "react-flexbox-grid";
import AddToCalendar from "react-add-to-calendar";
import "react-add-to-calendar/dist/react-add-to-calendar.css";
import "./index.scss";
/** Thank You Component */
export const ThankYou = () => {
  return (
    <>
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
            Click the [button/buttons] below to add the [session/sessions] to
            your calendar.
          </Text>
        </Col>
      </Row>
      <div className="reset-margin-container">
        <Row
          style={{ marginLeft: "0px", marginRight: "0px", padding: "16px 8px" }}
        >
          <Col xs={12}>
            <span className="text-bold">
              XIAFLEX
              <sup className="reg_mark">®</sup> Training and Certification with
              expert,{" "}
              <span className="brand-navy-blue">Dr. Prosper Benhaim</span>
            </span>
            <div>
              <span>Date:</span>{" "}
              <span className="brand-grey">Tuesday, April 13</span>
            </div>
            <div>
              <span>Time:</span>{" "}
              <span className="brand-grey">8:00 PM – 9:30 PM EST</span>
            </div>
            <div className="padding-top padding-bottom">
              <a class="add-to-calendar" href="calendar/invite.ics" download>
                ADD TO CALENDAR
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
