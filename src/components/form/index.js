import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, Checkbox  } from "@blueprintjs/core";
import axios from 'axios';
import SourceEmitter from '../../lib/emitter';

import './form.scss'

const DFA_API_SERVICES_URL = process.env.DFA_API_SERVICES_URL; 

class RegisterForm extends Component {

    constructor(props) {
        super()
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          npi: false,
          city: false,
          state: false,
          nameOfPreviousOrCurrent: false,
          xiaflexUnsub: false,
          endoUnsub: false,
          FormError: false,
          email_Error: false,
        };
        this.handleXiaflexUnsub = this.handleXiaflexUnsub.bind(this);
        this.handleEndoUnsub = this.handleEndoUnsub.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleChange = val => {
      // event.persist();
      // const elementType = event.target.type;
      // if (elementType === 'checkbox') {
      //   setValues(values => ({
      //     ...values,
      //     [event.target.name]: event.target.checked,
      //   }));
      // } else {
      this.setState({
        [val.target.name]: val.target.value
      });
      // }
      console.log(this.state);
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
      if (nextProps.email !== prevState.email && !prevState.email) {
        return {
          email: nextProps.email,
        }
      } else {
        return null
      }

    }

    handleSubmit = () => {
      const validEmail = this.validateEmail(this.state.email)
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
              EmailAddress: this.state.email,
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
                    email: '',
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
        const { email, firstName, lastName, xiaflexUnsub, endoUnsub, email_Error } = this.state;
        // const { email } = this.props;

        // console.log(`${email} is passed as ${email}`)

        return (

            <div className='form-container'>
              <FormGroup
                helperText=""
                label="First Name"
                labelFor="text-first-name"
                labelInfo="(required)"
                >
                  <InputGroup 
                    id="text-first-name" 
                    intent={ (email_Error && 'danger') || 'primary' }
                    placeholder="jon"
                    large
                    onChange={this.handleChange}
                    name="firstName"
                    value={firstName} 
                />
              </FormGroup>

              <FormGroup
                helperText=""
                label="Last Name"
                labelFor="text-last-name"
                labelInfo="(required)"
                >
                  <InputGroup 
                    id="text-last-name" 
                    intent={ (email_Error && 'danger') || 'primary' }
                    placeholder="smith"
                    large
                    onChange={this.handleChange}
                    name="lastName"
                    value={lastName} 
                />
              </FormGroup>

              <FormGroup
                helperText=""
                label="Email"
                labelFor="text-email"
                labelInfo="(required)"
                >
                  <InputGroup
                    id="text-email"
                    intent={ (email_Error && 'danger') || 'primary' }
                    placeholder="jon.smith@example.com"
                    large
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                />
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

export default RegisterForm;
