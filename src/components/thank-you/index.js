import React from "react";
import { Text, Button } from "@blueprintjs/core";
import { Row, Col } from "react-flexbox-grid";
import AddToCalendar from "react-add-to-calendar";
import "react-add-to-calendar/dist/react-add-to-calendar.css";
import "./index.scss";
/** Thank You Component */
export const ThankYou = () => {
  const addToCalendarButton = () => {
    let items = [{ google: "Google" }, { outlook: "Outlook" }];
    return (
      <AddToCalendar
        event={{
          title: "Happy Hour",
          description: "Lets go after work",
          location: "Boston, MA",
          startsAt: "2021-04-13T17:00:00-05:00",
          endsAt: "2021-03-10T18:00:00-05:00",
        }}
        buttonLabel="ADD TO CALENDAR"
        // listItems={items}
        buttonTemplate={{ textOnly: "none" }}
        displayItemIcons={false}
      />
    );
  };
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
            Click the{" "}
            <span className="brand-bold-purple">[button/buttons]</span> below to
            add the{" "}
            <span className="brand-bold-purple">[session/sessions]</span> to
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
              <span className="brand-bold-purple">Session 1:</span> Learn about
              a nonsurgical treatment option and review case studies with
              Dupuytren’s Contracture expert,{" "}
              <span className="brand-bold-purple">Dr. Prosper Benhaim</span>
            </span>
            <div>
              <span className="text-bold">Date:</span>{" "}
              <span className="brand-purple">Friday, October 2</span>
            </div>
            <div>
              <span className="text-bold">Time:</span>{" "}
              <span className="brand-purple">12:00PM - 1:00 PM CT</span>
            </div>
            <div className="padding-top padding-bottom">
              {addToCalendarButton()}
            </div>
          </Col>
        </Row>
      </div>
      <div className="reset-margin-container">
        <Row
          style={{ marginLeft: "0px", marginRight: "0px", padding: "16px 8px" }}
        >
          <Col xs={12}>
            <span className="text-bold">
              <span className="brand-bold-purple">Session 2:</span> XIAFLEX
              <sup className="reg_mark">®</sup> Training and Certification with
              expert,{" "}
              <span className="brand-bold-purple">Dr. Prosper Benhaim</span>
            </span>
            <div>
              <span className="text-bold">Date:</span>{" "}
              <span className="brand-purple">Tuesday, April 13</span>
            </div>
            <div>
              <span className="text-bold">Time:</span>{" "}
              <span className="brand-purple">12:30 PM – 1:30 PM CT</span>
            </div>
            <div className="padding-top padding-bottom">
              {addToCalendarButton()}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
