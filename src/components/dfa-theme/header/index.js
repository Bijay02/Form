import { Link } from "gatsby";
import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import SimpleNav from "../../simple-nav";
import logo from "../../../images/xiaflex-logo.png";
import { withPrefix } from "gatsby";

const Header = () => (
  <div className="outer-container">
    <div className="inner-container">
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={3} md={3}>
            <Link to="/">
              <img src={withPrefix(logo)} alt="Logo" className="logo" />
            </Link>
          </Col>
          {/* <Col xs={12} sm={9} md={9}>
          <Row end="sm">
            <Col xs={7} md={8}>
              <SimpleNav className="desktop-nav"/>
            </Col>
          </Row>
        </Col> */}
        </Row>
      </Grid>
    </div>
  </div>
);

export default Header;
