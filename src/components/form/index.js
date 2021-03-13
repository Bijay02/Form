import React, { Component } from "react";
import {
  FormGroup,
  InputGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Text,
} from "@blueprintjs/core";
import axios from "axios";
import SourceEmitter from "../../lib/emitter";
import { Row, Col } from "react-flexbox-grid";

const DFA_API_SERVICES_URL = process.env.DFA_API_SERVICES_URL;
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      npi: "",
      city: "",
      state: "",
      prevCurrentFellowship: "",
      fellowshipProgram: null,
      session: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail = (_email) => {
    const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailREGEX.test(_email);
  };

  handleButtonDisable = () => {
    return (
      this.state.firstName &&
      this.state.lastName &&
      (this.state.email && this.validateEmail(this.state.email)) &&
      this.state.npi &&
      this.state.city &&
      this.state.state &&
      this.state.fellowshipProgram &&
      this.state.session
    );
  };

  handleChange = async (event) => {
    event.persist();
    if (event.target.type === "checkbox") {
      await this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      await this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.email !== prevState.email && !prevState.email) {
      return {
        email: nextProps.email,
      };
    } else {
      return null;
    }
  }

  handleSubmit = () => {
    SourceEmitter.emit(`FormSubmitted`, true);
    return;

    //send form data
    //axios.get/post

    const dataToSend = {
      data: {
        EndoUnsubscribe: this.state.endoUnsub,
        XiaflexUnsubscribe: this.state.xiaflexUnsub,
        EmailAddress: this.state.email,
        UserType: this.props.hcp ? "HCP" : "CSR",
      },
    };

    //Submit form
    axios
      .post(DFA_API_SERVICES_URL, dataToSend)
      .then((response) => {
        this.setState({
          email: "",
          xiaflexUnsub: false,
          endoUnsub: false,
          FormError: false,
        });
        SourceEmitter.emit(`FormSubmitted`, true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      xiaflexUnsub,
      endoUnsub,
      email_Error,
      npi,
      city,
      state,
      fellowshipProgram,
      prevCurrentFellowship,
      session,
    } = this.state;
    const renderFirstName = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup
            label="First Name:"
            labelFor="text-first-name"
            id="form-group-firstName"
          >
            <InputGroup
              id="text-first-name"
              // intent={this.checkValidation("firstName")} # we don't need to check as button is disabled until all requied fields are filled out
              intent="primary"
              large
              onChange={this.handleChange}
              name="firstName"
              value={firstName}
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderLastName = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup
            label="Last Name:"
            labelFor="text-last-name"
            id="form-group-lastName"
          >
            <InputGroup
              id="text-last-name"
              // intent={this.checkValidation("lastName")}
              intent="primary"
              large
              onChange={this.handleChange}
              name="lastName"
              value={lastName}
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderEmail = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup label="Email:" labelFor="text-email">
            <InputGroup
              id="text-email"
              // intent={this.checkValidation("email")}
              intent="primary"
              large
              onChange={this.handleChange}
              name="email"
              value={email}
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderNPI = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup label="NPI:" labelFor="text-npi" id="form-group-npi">
            <InputGroup
              id="text-npi"
              large
              onChange={this.handleChange}
              name="npi"
              value={npi}
              // intent={this.checkValidation("npi")}
              intent="primary"
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderCity = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup helperText="" label="City:" labelFor="text-city">
            <InputGroup
              id="text-city"
              large
              onChange={this.handleChange}
              name="city"
              value={city} // intent={this.checkValidation("city")}
              intent="primary"
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderState = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup helperText="" label="State:" labelFor="text-state">
            <InputGroup
              id="text-state"
              large
              onChange={this.handleChange}
              name="state"
              value={state} // intent={this.checkValidation("state")}
              intent="primary"
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderPrevCurrentFellowShip = () => (
      <Row>
        <Col xs={12} md={8}>
          <FormGroup
            helperText=""
            label="Name of previous or current Hand Fellowship, if applicable:"
            labelFor="text-prev-current-fellowship"
          >
            <InputGroup
              id="text-prev-current-fellowship"
              large
              onChange={this.handleChange}
              name="prevCurrentFellowship"
              value={prevCurrentFellowship}
              intent="primary"
            />
          </FormGroup>
        </Col>
      </Row>
    );
    const renderFellowship = () => (
      <RadioGroup
        label="Are you currently enrolled in a Hand Fellowship Program?"
        onChange={this.handleChange}
        selectedValue={fellowshipProgram}
        name="fellowshipProgram"
        className="bp3-form-group bp3-form-fellowship"
      >
        <Radio
          label="Yes:"
          value="yes"
          className="bp3-align-right bp3-large radio-label-container"
        />
        <Radio
          label="No:"
          value="no"
          className="bp3-align-right bp3-large radio-label-container"
        />
      </RadioGroup>
    );
    const renderSessionToAttend = () => (
      <>
        <Row>
          <Col xs={12}>
            <Text className="bp3-text">
              Please select the session you would like to attend:
            </Text>
          </Col>
        </Row>
        <div className="reset-margin-container">
          <Row>
            <Col xs={12}>
              <Checkbox
                large={true}
                checked={session}
                name="session"
                onChange={this.handleChange}
                labelElement={
                  <span>
                    <span className="brand-navy-blue text-bold">
                      XIAFLEX
                      <sup className="reg_mark">&reg;</sup> Training and
                      Certification with expert,
                    </span>{" "}
                    Dr. Prosper Benhaim
                  </span>
                }
              />
              <div style={{ paddingLeft: "30px" }}>
                <div>
                  <span className="text-bold">Date:</span>{" "}
                  <span className="brand-grey">Tuesday, April 13</span>
                </div>
                <div>
                  <span className="text-bold">Time:</span>{" "}
                  <span className=" text-boldbrand-grey">
                    8:00 PM – 9:30 PM EST
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
    const renderUnsubscribe = () => {};
    return (
      <div className="form-container">
        {renderFirstName()}
        {renderLastName()}
        {renderEmail()}
        {renderNPI()}
        {renderCity()}
        {renderState()}
        {renderPrevCurrentFellowShip()}
        {renderFellowship()}
        {renderSessionToAttend()}
        <Row>
          <Col xs={12}>
            <button
              type="button"
              onClick={this.handleSubmit}
              className={`btn-submit-registration ${
                !this.handleButtonDisable() ? "disabled" : ""
              }`}
              disabled={!this.handleButtonDisable()}
            >
              SUBMIT
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterForm;
