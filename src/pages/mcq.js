import React from 'react';
import Layout from '../components/dfa-theme/layout';
import { Col, Row } from 'react-flexbox-grid';
import "./mcq.scss";

const McqPage = () => {
    return (
        <Layout>
            <section className='mcq-page'>
                <Row>
                    <Col xs={9}>
                        <div className="mcq-wrapper">
                            <h4>Please complete this optional survey</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="number">Please provide your National Provider Identifier (NPI).</label>
                                    <input type="number" name='number' className='form-control' />
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label>How likely are you to use XIAFLEX to treat an appropriate patient with a 60° MP joint contracture?</label>
                                        <fieldset className="radio">
                                            <label for="option1">
                                                <input
                                                    type="radio"
                                                    id="option1"
                                                    name="radio1"
                                                    group=""
                                                    value="radio1"
                                                />
                                                <p className="noselect">
                                                    <span className="radio_span"></span>Very likely
                                                </p>
                                            </label>
                                        </fieldset>
                                        <fieldset className="radio">
                                            <label for="option1">
                                                <input
                                                    type="radio"
                                                    id="option1"
                                                    name="radio1"
                                                    group=""
                                                    value="radio1"
                                                />
                                                <p className="noselect">
                                                    <span className="radio_span"></span>Very likely
                                                </p>
                                            </label>
                                        </fieldset>
                                    </div>
                                </div>                              
                                <div className="btn-wrap">
                                    <button type="button" className="btn-submit-registration">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </section>
        </Layout>
    );
}

export default McqPage;