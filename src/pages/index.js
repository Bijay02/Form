import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import Layout from "../components/dfa-theme/layout";
import UsubForm from "../components/form";
import RegisterForm from "../components/form";
import SourceEmitter from "../lib/emitter";
import "../components/form/form.scss";
import { ThankYou } from "../components/thank-you";
const metaTags = {
  description:
    "Xiaflex: You have been unsubscribed from XIAFLEX® promotional emails.",
  keywords: "You have been unsubscribed from XIAFLEX® promotional emails.",
};

let Subscription_Form_Submit = null;

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      formCompleted: false,
    };
  }

  componentDidMount() {
    this.setResponseParams();
    Subscription_Form_Submit = SourceEmitter.addListener(
      "FormSubmitted",
      (data) => {
        console.log("data", data);
        if (data) {
          this.setState({ formCompleted: true });
        }
      }
    );
  }

  componentWillUnmount() {
    Subscription_Form_Submit && Subscription_Form_Submit.remove();
  }

  setResponseParams() {
    const responseObj = window.location.hash
      .substr(1)
      .split("&")
      .map((el) => el.split("="))
      .reduce((pre, cur) => {
        pre[cur[0]] = cur[1];
        return pre;
      }, {});
    this.setState({
      email: responseObj.em,
    });
  }

  render() {
    const { email, formCompleted } = this.state;
    const renderRegister = () => (
      <>
        <Row>
          <Col xs={12}>
            <p>
              Register here for an Endo-sponsored program at the{" "}
              <span className="brand-bold-purple">
                [AAHS Virtual Annual Meeting]
              </span>
              !
            </p>
          </Col>
        </Row>
      </>
    );

    return (
      <Layout meta={metaTags}>
        {!formCompleted && renderRegister()}
        <Row>
          <Col xs={12}>
            {formCompleted && <ThankYou />}
            {!formCompleted && (
              <RegisterForm
                email={email}
                hcp={false}
                formSpecific="nutrition direct patient"
              />
            )}
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default IndexPage;
