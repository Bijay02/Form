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
							&copy; {copyrightYear()} Endo International plc or one of its
							affiliates. All rights reserved.&nbsp;&nbsp;
							<br className='show-in-mobile' />
							<br />
							<strong>XD-06820/January 2023&nbsp;&nbsp;</strong>
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
