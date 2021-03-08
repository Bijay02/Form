import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Layout from '../components/dfa-theme/layout'
import UsubForm from '../components/form'
import RegisterForm from '../components/form';
import SourceEmitter from '../lib/emitter';


const metaTags = {
  description: 'Xiaflex: You have been unsubscribed from XIAFLEX® promotional emails.',
  keywords: 'You have been unsubscribed from XIAFLEX® promotional emails.',
}

let Subscription_Form_Submit = null;


class IndexPage extends Component {

  constructor() {
    super()
     this.state = {
        email: '',
        formCompleted: false,
     };
  }

  componentDidMount() {
    this.setResponseParams();
    Subscription_Form_Submit = SourceEmitter.addListener(
      'FormSubmitted',
      data => {
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
      .split('&')
      .map(el => el.split('='))
      .reduce((pre, cur) => { pre[cur[0]] = cur[1]; return pre; }, {});
    this.setState({
      email: responseObj.em,
    });
  }

  render() {
    const { email, formCompleted } = this.state
    return (
      <Layout meta={metaTags}>
        <Row>
          <Col xs={12}>
            <p>Register here for an Endo-sponsored program at the [AAHS Virtual Annual Meeting]!</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            { formCompleted && <h4 style={{fontWeight: 'normal'}}><strong>Thank You.</strong> <br/>You have been unsubscribed from future communications.</h4>}
            { !formCompleted && <RegisterForm email={email} hcp={false} formSpecific='nutrition direct patient' /> }
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
