import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, Checkbox  } from "@blueprintjs/core";
import axios from 'axios';
import SourceEmitter from '../../lib/emitter';

import './form.scss'

const DFA_API_SERVICES_URL = process.env.DFA_API_SERVICES_URL; 

class UnsubForm extends Component {
    constructor(props) {
        super()
        this.state = {
            emailValue: false,
            xiaflexUnsub: false,
            endoUnsub: false,
            FormError: false,
            email_Error: false,
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handleXiaflexUnsub = this.handleXiaflexUnsub.bind(this);
        this.handleEndoUnsub = this.handleEndoUnsub.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleEmail = val => {
        console.log('handle email ', val.target.value)
        this.setState({
          emailValue: val.target.value
        });
        
      };
    
    handleXiaflexUnsub = val => {
        this.setState({
            xiaflexUnsub: !this.state.xiaflexUnsub
        });
    };

    handleEndoUnsub = val => {
        this.setState({
            endoUnsub: !this.state.endoUnsub
        });
    };

     
    validateEmail = _email => {
        const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        return emailREGEX.test(_email);
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.email !== prevState.emailValue && !prevState.emailValue) {
        return {
          emailValue: nextProps.email,
        }
      } else {
        return null
      }

    }

    handleSubmit = () => {
      const validEmail = this.validateEmail(this.state.emailValue)
        console.log('boom submit, is email valid?, ', validEmail)
        if (
          !validEmail
        ) {
          this.setState({
            FormError: true, 
            email_Error: true,
          });
          alert('Error: Form fields are invalid.');
        } else {
          this.setState({
            FormError: false
          });
    
          //send form data
          //axios.get/post
    
          const dataToSend = {
            data: {
              EndoUnsubscribe: this.state.endoUnsub,
              XiaflexUnsubscribe: this.state.xiaflexUnsub,
              EmailAddress: this.state.emailValue,
              UserType: ( (this.props.hcp) ? 'HCP' : 'CSR' )
            }
          };
    
          //Submit form
          axios
            .post(DFA_API_SERVICES_URL, dataToSend)
            .then(response => {
              //console.log(response);
              //Clear statea
              this.setState(
                  {
                    emailValue: '',
                    xiaflexUnsub: false,
                    endoUnsub: false,
                    FormError: false
                  }
              );
              SourceEmitter.emit(`FormSubmitted`, true);
            })
            .catch(error => {
              console.log(error);
            });
          //console.log(dataToSend);
        }
      };
    
    render() {
        const { emailValue, xiaflexUnsub, endoUnsub, email_Error } = this.state;
        const { email } = this.props;

        console.log(`${emailValue} is passed as ${email}`)

        return (

            <div className='form-container'>
                <FormGroup
                    helperText="Please add your email, if it was not captured"
                    label="Email"
                    labelFor="text-email"
                    labelInfo="(required)"
                    >
                     <InputGroup id="text-email" intent={ (email_Error && 'danger') || 'primary' } placeholder="jon.smith@example.com" large onChange={this.handleEmail} value={emailValue}  />
                </FormGroup>
                <Checkbox checked={xiaflexUnsub} onChange={this.handleXiaflexUnsub}>
                I would like to unsubscribe from promotional emails about XIAFLEX<sup>&reg;</sup> for Peyronie's disease.
                </Checkbox>
                <Checkbox checked={endoUnsub} onChange={this.handleEndoUnsub} label="I would like to unsubscribe from emails from Endo Pharmaceuticals Inc." />

                <Button intent="primary" type='submit' large text="Submit" disabled={ !xiaflexUnsub && !endoUnsub} onClick={this.handleSubmit} />
            </div>
        );
    }
};

export default UnsubForm;
