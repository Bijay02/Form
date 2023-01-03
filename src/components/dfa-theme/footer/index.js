import React from 'react';
import ActiveLink from '../../active-link';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { copyrightYear } from '../../../lib/util.helper';
import imgEndoLogo from '../../../images/endo-logo.png';
import './footer.scss';

const Footer = () => (
	<div className='outer-container'>
		<div className='inner-container'>
			<Grid fluid>
				{/* <Row>
          <Col xs={12}>
            <div className="footer-links-block">
              <p className="txt-us-resident">Intended for U.S. Residents Only</p>
              <ActiveLink
                EnableActiveClass={false}
                to="/"
                EventObject={{
                  category: 'Footer Link',
                  action: 'Click',
                  label: 'Home Link',
                }}
              >
                Home
              </ActiveLink>
              <span className="footer-link-separator">|</span>
              <ActiveLink
                EnableActiveClass={false}
                ExternalLink
                to="http://www.endo.com/File%20Library/Products/Prescribing%20Information/Xiaflex_prescribing_information.html"
                EventObject={{
                  category: 'Footer Link',
                  action: 'Click',
                  label: 'Full Prescribing Information Link',
                }}
              >
                Full Prescribing Information
              </ActiveLink>
              <span className="footer-link-separator">|</span>
              <ActiveLink
                EnableActiveClass={false}
                ExternalLink
                to="http://www.endo.com/contact"
                EventObject={{
                  category: 'Footer Link',
                  action: 'Click',
                  label: 'Contact Us Link',
                }}
              >
                Contact Us
              </ActiveLink>
              <span className="footer-link-separator">|</span>
              <ActiveLink
                EnableActiveClass={false}
                ExternalLink
                to="http://www.endo.com/endopharma"
                EventObject={{
                  category: 'Footer Link',
                  action: 'Click',
                  label: 'Corporate Home Link',
                }}
              >
                Corporate Home
              </ActiveLink>
            </div>
          </Col>
        </Row> */}
				<Row className='endo-footer-logo-block' center='xs'>
					<Col xs={12} md={3}>
						<a
							href='http://www.endo.com'
							target='_blank'
							style={{ display: 'block' }}
						>
							<img src={imgEndoLogo} className='footer-logo' />
						</a>
					</Col>
					<Col xs={12} md={8} className='rx-block endo-footer-other-content'>
						<p className='txt-rx-only'>&nbsp;</p>
						<p className='footer'>
							XIAFLEX<sup>&reg;</sup> is a registered trademark of{' '}
							<br className='show-in-mobile' />
							Endo International plc or one of its affiliates.
							<br />
							&copy; {copyrightYear()} Endo Pharmaceuticals Inc.&nbsp;&nbsp;
							<br className='show-in-mobile' />
							All rights reserved.&nbsp;&nbsp;Malvern, PA 19355
							<br />
							<strong>XD-06678/August 2022&nbsp;&nbsp;</strong>
							<br className='show-in-mobile' />
							www.xiaflex.com&nbsp;&nbsp;1-800-462-ENDO (3636)
						</p>
					</Col>
				</Row>
			</Grid>
		</div>
	</div>
);

export default Footer;
