import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Modal from 'react-awesome-modal'
import './interstitial.scss'
const OpenLink = (closeAction, openURL) => {
  closeAction()
  setTimeout(() => {
    window.open(openURL)
  }, 100)
}

const Interstitial = props => (
  <Modal visible={props.visible} onClickAway={props.onClickAway}>
    <div className="interstitial-content">
      <Row>
        <Col xs={12}>Modal Content.. blah blah!</Col>
      </Row>
      <Row>
        <Col xs={12}>
          <button
            onClick={() => {
              OpenLink(props.onClickAway, props.interstitialAwayURL)
            }}
          >
            Continue
          </button>
          <button onClick={props.onClickAway}>Close</button>
        </Col>
      </Row>
    </div>
  </Modal>
)

export default Interstitial
