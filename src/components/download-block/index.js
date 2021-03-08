import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import ActiveLink from '../active-link'
import './db.scss'

const DownloadBlock = props => {

  const topContent = (props.ThumbnailImage) ? (
    <Row>
      <Col xs={8}><span className="copy-matter">{props.children}</span></Col>
      <Col xs={4}>
        <img src={require(`../../images/${props.ThumbnailImage}`)} />
      </Col>
    </Row>
  ):
  (
    <Row center="xs" middle="xs" className="single-db">
      <Col xs={12}><span className="copy-matter">{props.children}</span></Col>
    </Row>
  )

  return (
    <div className="db-container">
      { topContent }
      <Row bottom="xs">
        <Col xs={12}>
          <ActiveLink
            ExternalLink
            EnableActiveClass={false}
            to={props.DownloadLPath}
            EventObject={{
              category: 'PDF Download',
              action: 'Click',
              label: props.LinkCaption,
            }}
            className="pink-button"
          >
            {props.LinkCaption}
          </ActiveLink>
        </Col>
      </Row>
    </div>
  )
}

export default DownloadBlock
