import React, { Component } from 'react';
import {
	FormGroup,
	InputGroup,
	Checkbox,
	Radio,
	RadioGroup,
	Text,
} from '@blueprintjs/core';
import axios from 'axios';
import SourceEmitter from '../../lib/emitter';
import { Row, Col } from 'react-flexbox-grid';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-v3';
import endpoint, { whichSite } from '../helpers';

// integration or  development
const RECAPTCHA_SITE_KEY =
	whichSite() === 'development'
		? '6LcaEIIaAAAAAOvSgY5AQiG-jUu-hM0sFohwDzzl'
		: '6LeXeboZAAAAAAJ7opsQpnfBVkXwbGTrPWJoJsjY';
class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question1: '',
			question2: '',
			question3: '',
			question4: '',
			question5: '',
			question6: '',
			prevCurrentFellowship: '',
			fellowshipProgram: null,
			session: false,
			checkingReCaptchaForSubmit: false,
			ReCaptchaToken: '',
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
				.split('&')
				.map((p) => p.split('='))
				.reduce((prev, cur) => {
					prev[cur[0]] = cur[1];
					return prev;
				}, {});
		let updatedQuery = { ...query };
		if (query && query.hasOwnProperty('emid')) {
			updatedQuery = { ...updatedQuery, EndoMdmId: updatedQuery['emid'] };
			delete updatedQuery['emid'];
		} else {
			updatedQuery = { ...updatedQuery, EndoMdmId: '' };
		}
		if (updatedQuery && updatedQuery.hasOwnProperty('JobId')) {
			updatedQuery = { ...updatedQuery, jid: updatedQuery['JobId'] };
			delete updatedQuery['JobId'];
		} else {
			updatedQuery = { ...updatedQuery, jid: '' };
		}
		if (updatedQuery && updatedQuery.hasOwnProperty('SubscriberId')) {
			updatedQuery = { ...updatedQuery, sid: updatedQuery['SubscriberId'] };
			delete updatedQuery['SubscriberId'];
		} else {
			updatedQuery = { ...updatedQuery, sid: '' };
		}
		if (updatedQuery && updatedQuery.hasOwnProperty('CampaignId')) {
			updatedQuery = { ...updatedQuery, cid: updatedQuery['CampaignId'] };
			delete updatedQuery['CampaignId'];
		} else {
			updatedQuery = { ...updatedQuery, cid: '' };
		}
		if (updatedQuery && updatedQuery.hasOwnProperty('TacticId')) {
			updatedQuery = { ...updatedQuery, tid: updatedQuery['TacticId'] };
			delete updatedQuery['TacticId'];
		} else {
			updatedQuery = { ...updatedQuery, tid: '' };
		}

		this.queryParams = { ...updatedQuery };
		console.log(this.queryParams);
	};

	componentDidMount() {
		typeof window !== 'undefined' &&
			this.parseParams(
				window.location.search.substr(1, window.location.search.length)
			); // strip out question mark from the url
		loadReCaptcha(RECAPTCHA_SITE_KEY, () => {});
	}

	validateEmail = (_email) => {
		const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return emailREGEX.test(_email);
	};

	handleButtonDisable = () => {
		let disabled =
			this.state.question1 &&
			this.state.question1.length >= 1 &&
			this.state.question2 &&
			this.state.question2.length >= 1 &&
			this.state.question3 &&
			this.state.question3.length >= 1 &&
			this.state.question4 &&
			this.state.question4.length >= 1 &&
			this.state.question5 &&
			this.state.question5.length >= 1 &&
			this.state.question6 &&
			this.state.question6.length >= 1 &&
			!this.state.isLoading;

		// // this.state.fellowshipProgram &&
		// // this.state.fellowshipProgram.length <= 500 &&
		// this.state.session &&
		// !this.state.isLoading;
		return disabled;
	};

	handleChange = async (event) => {
		event.persist();
		if (event.target.type === 'checkbox') {
			await this.setState({
				[event.target.name]: event.target.checked,
			});
		} else {
			await this.setState({
				[event.target.name]: event.target.value,
			});
		}
	};

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	if (nextProps.question3 !== prevState.question3 && !prevState.question3) {
	// 		return {
	// 			question3: nextProps.question3,
	// 		};
	// 	} else {
	// 		return null;
	// 	}
	// }

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

	// will need to update this for the API - mjm1374 - 1/3/2023
	handleSubmit = async () => {
		const dataToSend = {
			// contactKey: this.state.email,
			// EventDefinitionKey: "",
			// data: {
			question1: this.state.question1,
			question2: this.state.question2,
			question3: this.state.question3,
			question4: this.state.question4,
			question5: this.state.question5,
			question6: this.state.question6,
			// FellowshipName: this.state.prevCurrentFellowship,
			// CurrentlyEnrolled: this.state.fellowshipProgram,
			Event: 'HCP_20211019',
			ReCaptchaToken: this.state.ReCaptchaToken,
			...this.queryParams,
		};
		// },

		//Submit form
		try {
			await this.setState({ isLoading: true });
			const res = await axios.post(endpoint, dataToSend);
			SourceEmitter.emit(`FormSubmitted`, true);
			await this.setState({ isLoading: false });
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
			question1,
			question2,
			question3,
			question4,
			question5,
			question6,
			xiaflexUnsub,
			endoUnsub,
			email_Error,

			//fellowshipProgram,
			//prevCurrentFellowship,
			session,
		} = this.state;
		const renderQuestion1 = () => (
			<Row>
				<Col xs={12} md={8}>
					<FormGroup
						label="What did the Dupuytren's contracture education/training look like in your fellowship?"
						labelFor='text-question-1'
						id='form-question-1'
					>
						<InputGroup
							id='text-question-1'
							// intent={this.checkValidation("fellowship")} # we don't need to check as button is disabled until all requied fields are filled out
							intent='primary'
							large
							onChange={this.handleChange}
							name='question1'
							value={question1}
						/>
					</FormGroup>
				</Col>
			</Row>
		);
		const renderQuestion2 = () => (
			<Row>
				<Col xs={12} md={8}>
					<FormGroup
						label='How were you exposed to XIAFLEX?  If applicable, what did that training look like?  Did you leave feeling clinically prepared to enter practice?'
						labelFor='text-question-2'
						id='form-question-2'
					>
						<InputGroup
							id='text-question-2'
							// intent={this.checkValidation("exposed")}
							intent='primary'
							large
							onChange={this.handleChange}
							name='question2'
							value={question2}
						/>
					</FormGroup>
				</Col>
			</Row>
		);
		const renderQuestion3 = () => (
			<Row>
				<Col xs={12} md={8}>
					<FormGroup
						label='What clinical pain points around Dupuytren’s contracture have you experienced since you’ve entered practice?'
						labelFor='text-question-3'
						id='form-question-3'
					>
						<InputGroup
							id='text-question-3'
							// intent={this.checkValidation("email")}
							intent='primary'
							large
							onChange={this.handleChange}
							name='question3'
							value={question3}
						/>
					</FormGroup>
				</Col>
			</Row>
		);
		const renderQuestion4 = () => (
			<Row>
				<Col xs={12} md={8}>
					<FormGroup
						label='What operational pain points (product acquisition, billing, etc) have you experienced since you’ve entered practice?'
						labelFor='text-question-4'
						id='form-question-4'
					>
						<InputGroup
							id='text-question-4'
							large
							onChange={this.handleChange}
							name='question4'
							value={question4}
							// intent={this.checkValidation("renderQuestion4")}
							intent='primary'
						/>
					</FormGroup>
				</Col>
			</Row>
		);
		const renderQuestion5 = () => (
			<Row>
				<Col xs={12} md={8}>
					<FormGroup
						helperText=''
						label='Is there anything you wish you had learned in fellowship that would have been useful when starting out in practice?'
						labelFor='text-question-5'
						id='form-question-5'
					>
						<InputGroup
							id='text-question-5'
							large
							onChange={this.handleChange}
							name='question5'
							value={question5} // intent={this.checkValidation("city")}
							intent='primary'
						/>
					</FormGroup>
				</Col>
			</Row>
		);
		const renderQuestion6 = () => (
			<Row>
				<Col xs={12} md={8}>
					<FormGroup
						helperText=''
						label='How can Endo better support the integration of XIAFLEX into your practice?'
						labelFor='text-question-6'
						id='form-question-6'
					>
						<InputGroup
							id='text-question-6'
							large
							onChange={this.handleChange}
							name='question6'
							value={question6} // intent={this.checkValidation("state")}
							intent='primary'
						/>
					</FormGroup>
				</Col>
			</Row>
		);

		// const renderPrevCurrentFellowShip = () => (
		// 	<Row>
		// 		<Col xs={12} md={8}>
		// 			<FormGroup
		// 				helperText=''
		// 				label='Name of previous or current Hand Fellowship, if applicable:'
		// 				labelFor='text-prev-current-fellowship'
		// 			>
		// 				<InputGroup
		// 					id='text-prev-current-fellowship'
		// 					large
		// 					onChange={this.handleChange}
		// 					name='prevCurrentFellowship'
		// 					value={prevCurrentFellowship}
		// 					intent='primary'
		// 				/>
		// 			</FormGroup>
		// 		</Col>
		// 	</Row>
		// );

		// const renderFellowship = () => (
		// 	<RadioGroup
		// 		label='Are you currently enrolled in a Hand Fellowship Program?'
		// 		onChange={this.handleChange}
		// 		selectedValue={fellowshipProgram}
		// 		name='fellowshipProgram'
		// 		className='bp3-form-group bp3-form-fellowship'
		// 	>
		// 		<Radio
		// 			label='Yes:'
		// 			value='Yes'
		// 			className='bp3-align-right bp3-large radio-label-container'
		// 		/>
		// 		<Radio
		// 			label='No:'
		// 			value='No'
		// 			className='bp3-align-right bp3-large radio-label-container'
		// 		/>
		// 	</RadioGroup>
		// );
		// const renderSessionToAttend = () => (
		// 	<>
		// 		<Row>
		// 			<Col xs={12}>
		// 				<Text className='bp3-text'>
		// 					Please select the session you would like to attend:
		// 				</Text>
		// 			</Col>
		// 		</Row>
		// 		<div className='reset-margin-container'>
		// 			<Row>
		// 				<Col xs={12}>
		// 					<Checkbox
		// 						large={true}
		// 						checked={session}
		// 						name='session'
		// 						onChange={this.handleChange}
		// 						labelElement={
		// 							<span>
		// 								<span className='brand-navy-blue text-bold'>
		// 									Learn about a nonsurgical treatment option and review case
		// 									studies with Dupuytren’s contracture expert,{' '}
		// 									<nobr>Dr. Glenn Gaston</nobr>
		// 								</span>
		// 							</span>
		// 						}
		// 					/>
		// 					<div style={{ paddingLeft: '30px' }}>
		// 						<div>
		// 							<span className='text-bold'>Date:</span>{' '}
		// 							<span className='brand-grey'>Tuesday, October 19, 2021</span>
		// 						</div>
		// 						<div>
		// 							<span className='text-bold'>Time:</span>{' '}
		// 							<span className=' text-boldbrand-grey'>8:00 PM EST</span>
		// 						</div>
		// 					</div>
		// 				</Col>
		// 			</Row>
		// 		</div>
		// 	</>
		// );

		const renderUnsubscribe = () => {};
		return (
			<div className='form-container'>
				{renderQuestion1()}
				{renderQuestion2()}
				{renderQuestion3()}
				{renderQuestion4()}
				{renderQuestion5()}
				{renderQuestion6()}
				{/* {renderPrevCurrentFellowShip()} */}
				{/* {renderFellowship()}
				{renderSessionToAttend()} */}
				<Row>
					<Col xs={12}>
						<button
							type='button'
							onClick={this.handleSubmitForCaptcha}
							className={`btn-submit-registration ${
								!this.handleButtonDisable() ? 'disabled' : ''
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
