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
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import endpoint, { whichSite } from "../helpers";

const RECAPTCHA_SITE_KEY =
  whichSite() === "integration"
    ? "6LcaEIIaAAAAAOvSgY5AQiG-jUu-hM0sFohwDzzl"
    : "6LeXeboZAAAAAAJ7opsQpnfBVkXwbGTrPWJoJsjY";
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
      checkingReCaptchaForSubmit: false,
      ReCaptchaToken: "",
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  queryParams = {}; // Used for handling query parameters that are sent along with form data
  parseParams = (param) => {
    const query =
      param &&
      param
        .split("&")
        .map((p) => p.split("="))
        .reduce((prev, cur) => {
          prev[cur[0]] = cur[1];
          return prev;
        }, {});
    let updatedQuery = { ...query };
    if (query && query.hasOwnProperty("emid")) {
      updatedQuery = { ...updatedQuery, EndoMdmId: updatedQuery["emid"] };
      delete updatedQuery["emid"];
    } else {
      updatedQuery = { ...updatedQuery, EndoMdmId: "" };
    }
    if (updatedQuery && updatedQuery.hasOwnProperty("JobId")) {
      updatedQuery = { ...updatedQuery, jid: updatedQuery["JobId"] };
      delete updatedQuery["JobId"];
    } else {
      updatedQuery = { ...updatedQuery, jid: "" };
    }
    if (updatedQuery && updatedQuery.hasOwnProperty("SubscriberId")) {
      updatedQuery = { ...updatedQuery, sid: updatedQuery["SubscriberId"] };
      delete updatedQuery["SubscriberId"];
    } else {
      updatedQuery = { ...updatedQuery, sid: "" };
    }
    if (updatedQuery && updatedQuery.hasOwnProperty("CampaignId")) {
      updatedQuery = { ...updatedQuery, cid: updatedQuery["CampaignId"] };
      delete updatedQuery["CampaignId"];
    } else {
      updatedQuery = { ...updatedQuery, cid: "" };
    }
    if (updatedQuery && updatedQuery.hasOwnProperty("TacticId")) {
      updatedQuery = { ...updatedQuery, tid: updatedQuery["TacticId"] };
      delete updatedQuery["TacticId"];
    } else {
      updatedQuery = { ...updatedQuery, tid: "" };
    }

    this.queryParams = { ...updatedQuery };
  };

  componentDidMount() {
    typeof window !== "undefined" &&
      this.parseParams(window.location.search.substr(1)); // strip out question mark from the url
    loadReCaptcha(RECAPTCHA_SITE_KEY, () => {});
  }

  validateEmail = (_email) => {
    const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailREGEX.test(_email);
  };

  handleButtonDisable = () => {
    return (
      this.state.firstName &&
      this.state.firstName.length <= 35 &&
      this.state.lastName &&
      this.state.lastName.length <= 35 &&
      this.state.email &&
      this.validateEmail(this.state.email) &&
      this.state.email.length <= 254 &&
      this.state.npi &&
      this.state.npi.length <= 35 &&
      this.state.city &&
      this.state.city.length <= 25 &&
      this.state.state &&
      this.state.state.length <= 2 &&
      this.state.fellowshipProgram &&
      this.state.fellowshipProgram.length <= 500 &&
      this.state.session &&
      !this.state.isLoading
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

  verifyCallback = async (recaptchaToken) => {
    if (this.state.checkingReCaptchaForSubmit) {
      await this.setState({
        checkingReCaptchaForSubmit: false,
        ReCaptchaToken: recaptchaToken,
      });
      await this.handleSubmit();
    }
  };

  updateRecaptchaToken = () => {
    this.recaptcha.execute();
  };

  handleSubmitForCaptcha = async () => {
    await this.setState({ checkingReCaptchaForSubmit: true });
    this.updateRecaptchaToken();
  };

  handleSubmit = async () => {
    const dataToSend = {
      // contactKey: this.state.email,
      // EventDefinitionKey: "",
      // data: {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      EmailAddress: this.state.email,
      NPI: this.state.npi,
      City: this.state.city,
      State: this.state.state,
      FellowshipName: this.state.prevCurrentFellowship,
      CurrentlyEnrolled: this.state.fellowshipProgram,
      Event: "HCP_20211019",
      ReCaptchaToken: this.state.ReCaptchaToken,
      ...this.queryParams,
    };
    // },

    //Submit form
    try {
      await this.setState({isLoading: true});
      const res = await axios.post(endpoint, dataToSend);
      SourceEmitter.emit(`FormSubmitted`, true);
      await this.setState({isLoading: false});
    } catch (e) {
      console.log(e);
    }
    // axios
    //   .post(endpoint, dataToSend)
    //   .then((response) => {
    //     this.setState({
    //       email: "",
    //       xiaflexUnsub: false,
    //       endoUnsub: false,
    //       FormError: false,
    //     });
    //     SourceEmitter.emit(`FormSubmitted`, true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
              maxLength={2}
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
          value="Yes"
          className="bp3-align-right bp3-large radio-label-container"
        />
        <Radio
          label="No:"
          value="No"
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
                      Learn about a nonsurgical treatment option and review case studies with Dupuytren’s contracture expert, <nobr>Dr. Glenn Gaston</nobr>
                    </span>
                  </span>
                }
              />
              <div style={{ paddingLeft: "30px" }}>
                <div>
                  <span className="text-bold">Date:</span>{" "}
                  <span className="brand-grey">Tuesday, October 19, 2021</span>
                </div>
                <div>
                  <span className="text-bold">Time:</span>{" "}
                  <span className=" text-boldbrand-grey">
                  8:00 PM EST
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
              onClick={this.handleSubmitForCaptcha}
              className={`btn-submit-registration ${
                !this.handleButtonDisable() ? "disabled" : ""
              }`}
              disabled={!this.handleButtonDisable()}
            >
              SUBMIT
            </button>
            <ReCaptcha
              ref={(ref) => (this.recaptcha = ref)}
              sitekey={RECAPTCHA_SITE_KEY}
              verifyCallback={this.verifyCallback}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterForm;
