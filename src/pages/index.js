import React, { useState, useRef } from 'react';
import Layout from '../components/dfa-theme/layout';
import { Col, Row } from 'react-flexbox-grid';
import "./index.scss";
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';
import { useEffect } from 'react';
import axios from 'axios';

// const DATA_API_URL = 'https://www.endoitservices.com/XdcSpeakerProgramSurveySvc/api/InsertSurvey';
const DATA_API_URL = 'https://master--neon-starburst-b768d6.netlify.app/.netlify/functions/insert-survey'
const RECAPTCHA_SITE_KEY = '6LeXeboZAAAAAAJ7opsQpnfBVkXwbGTrPWJoJsjY'

const questions = [
	{
		label: "How likely are you to use XIAFLEX to treat an appropriate patient with a 60° MP joint contracture?",
		name: "Q2",
		id: 'q2',
		options: [
			{
				label: 'Very likely',
				id: 'very-likely',
			},
			{
				label: 'Likely',
				id: 'likely',
			},
			{
				label: 'Somewhat likely',
				id: 'somewhat-likely',
			},
			{
				label: 'Not likely',
				id: 'not-likely',
			},
		]
	},
	{
		label: "How likely are you to use XIAFLEX to treat an appropriate patient with a 40° PIP joint contracture of the fifth digit?",
		name: "Q3",
		id: 'q3',
		options: [
			{
				label: 'Very likely',
				id: 'very-likely',
			},
			{
				label: 'Likely',
				id: 'likely',
			},
			{
				label: 'Somewhat likely',
				id: 'somewhat-likely',
			},
			{
				label: 'Not likely',
				id: 'not-likely',
			},
		]
	},
	{
		label: "How likely are you to use XIAFLEX to treat an appropriate patient with 2 contractures on the same finger?",
		name: "Q4",
		id: 'q4',
		options: [
			{
				label: 'Very likely',
				id: 'very-likely',
			},
			{
				label: 'Likely',
				id: 'likely',
			},
			{
				label: 'Somewhat likely',
				id: 'somewhat-likely',
			},
			{
				label: 'Not likely',
				id: 'not-likely',
			},
		]
	},
	{
		label: "How concerned are you about possible skin tears during the XIAFLEX finger extension procedure?",
		name: "Q5",
		id: 'q5',
		options: [
			{
				label: 'Very concerned—I do not use XIAFLEX for most appropriate patients, specifically to avoid skin tears',
				id: 'very-concerned',
			},
			{
				label: 'Somewhat concerned—I do not use XIAFLEX for certain appropriate patients, specifically to avoid skin tears',
				id: 'somewhat-concerned',
			},
			{
				label: 'Minimally concerned—Skin tears should be managed with standard wound care',
				id: 'minimally-concerned',
			},
			{
				label: 'Not concerned',
				id: 'not-concerned',
			},
		]
	},
	{
		label: "How concerned are you about recurrence after use of XIAFLEX?",
		name: "Q6",
		id: 'q6',
		options: [
			{
				label: 'Very concerned—I do not use XIAFLEX for most appropriate patients, specifically to avoid recurrence',
				id: 'very-concerned',
			},
			{
				label: 'Somewhat concerned—I do not use XIAFLEX for certain appropriate patients, specifically to avoid recurrence',
				id: 'somewhat-concerned',
			},
			{
				label: 'Minimally concerned—Recurrence can appear regardless of treatment option',
				id: 'minimally-concerned',
			},
			{
				label: 'Not concerned',
				id: 'not-concerned',
			},
		]
	},
	{
		label: "How confident are you in your practice’s ability to acquire XIAFLEX for appropriate patients with Dupuytren’s contracture?",
		name: "Q7",
		id: 'q7',
		options: [
			{
				label: 'Very confident',
				id: 'very-confident',
			},
			{
				label: 'Confident',
				id: 'confident',
			},
			{
				label: 'Somewhat confident',
				id: 'somewhat-confident',
			},
			{
				label: 'Not confident',
				id: 'confident',
			},
		]
	}
]


const McqPage = () => {
	const [submitting, setSubmitting] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState(false);
	const recaptchaRef = useRef();
	const [data, setData] = useState({
		Q1: '',
		Q2: '',
		Q3: '',
		Q4: '',
		Q5: '',
		Q6: '',
		Q7: '',
		RecaptchaToken: ''
	})

	useEffect(() => {
        loadReCaptcha(RECAPTCHA_SITE_KEY, () => { });
      }, []);
    
      const formattedNumber = (value) => {
        return value.replace(/\D/g, "");
      };
    
      const btnDisabled = () => {
        return (Object.values(data).some(v => v === '') || formSubmitted || data.Q1.length !== 10);
      };
    
      const handleChange = (key, value) => {
        data[key] = value;
        setData({ ...data });
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        recaptchaRef?.current && recaptchaRef.current.execute();
        setSubmitting(true);
        await axios({
          url: DATA_API_URL,
          method: "POST",
          data: JSON.stringify(data),
        }).then(() => {
          setFormSubmitted(true);
          setData({ Q1: '' });
        }).catch((error) => console.log(error.response));
        setSubmitting(false);
      };
    
      return (
        <Layout>
          <section className='mcq-page'>
            <Row>
              <Col xs={9}>
                <div className="mcq-wrapper">
                  <h4>Please complete this optional survey</h4>
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="number">Please provide your National Provider Identifier (NPI).</label>
                      <input maxLength={10} value={data.Q1} name='Q1' className='form-control' onChange={e => handleChange('Q1', formattedNumber(e.target.value))} />
                    </div>
                    {questions.map((item, index) => (
                      <div className="form-group" key={index}>
                        <div onChange={e => handleChange(item.name, e.target.value)}>
                          <label>{item.label}</label>
                          {item.options.map((opt, i) => (
                            <fieldset className="radio" key={'radio' + i}>
                              <label htmlFor={`${item.id}_${opt.id}`}>
                                <input
                                  type="radio"
                                  checked={data[item.name] === opt.label}
                                  id={`${item.id}_${opt.id}`}
                                  value={opt.label}
                                  name={item.id}
                                />
                                <p className="noselect">
                                  <span className="radio_span"></span>{opt.label}
                                </p>
                              </label>
                            </fieldset>
                          ))}
                        </div>
                      </div>
                    ))}
                    <ReCaptcha
                      sitekey={RECAPTCHA_SITE_KEY}
                      ref={recaptchaRef}
                      verifyCallback={token => handleChange('RecaptchaToken', token)}
                    />
                    <div className="btn-wrap">
                    <button 
  type="submit" 
  className={`btn-submit-registration${btnDisabled() ? ' disabled' : ''}`} 
  disabled={btnDisabled()}
>
  SUBMIT
</button>
        {formSubmitted ? <span className="form-submitted">Thank you.</span> : null}
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </section>
        </Layout>
      );
    };
    
    export default McqPage;