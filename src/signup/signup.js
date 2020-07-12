import React from "react"

import { Link } from 'react-router-dom';


import styles from './styles';

import FormControl from '@material-ui/core/FormControl';

import InputLabel from '@material-ui/core/InputLabel';

import Input from '@material-ui/core/Input';

import Paper from '@material-ui/core/Paper';

import withStyles from '@material-ui/core/styles/withStyles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const firebase = require("firebase");
class SignupComponent extends React.Component
{
    constructor()
    {
        super()
        this.state={
            email:"",
            password:"",
            confirmPassword:"",
            signupError:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(event)
    {

        this.setState(
           { [event.target.name]:event.target.value }
        )
    }

    handleClick(event)
    {
        this.setState(
            {signupError:""}
        )
        event.preventDefault()
        console.log(this.state)
        if(this.state.password!==this.state.confirmPassword)
        {
            this.setState(
                {signupError:'Passwords dont match'}
            )
        }

        else
        {
            firebase
             .auth()
             .createUserWithEmailAndPassword(this.state.email,this.state.password)
             .then(authRes=>{
                 const user ={
                     email : authRes.user.email
                 }
             
             firebase
              .firestore()
              .collection('users')
              .doc(this.state.email)
              .set(user)
              .then(()=>{
                  this.props.history.push({
                 pathname:'/details',
                 state: { email: this.state.email }
             })
              },dbError=>
              {
                  console.log(dbError)
                  this.setState({
                      signupError:'failed to add user'
                  })
              }
              )

              },authError=>{
                  console.log(authError)
                  this.setState({
                      signupError:'failed to add user'
                  })
              })
             
        }
    }
    render()
    {
        const {classes} = this.props
        return(
            <div>
                <main className={classes.main}>
                    <CssBaseline></CssBaseline>
                        <Paper className={classes.paper}>
                            <Typography component='h1' variant='h5'>
                                Sign Up!
                            </Typography>
                            <form className={classes.form}>
                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel htmlFor='signup-email-input'>Email</InputLabel>
                                    <Input autoComplete='email' autoFocus onChange={this.handleChange} value={this.state.email} name="email"/>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel htmlFor='signup-password-input'>Password</InputLabel>
                                    <Input type='password' autoFocus onChange={this.handleChange} value={this.state.password} name="password" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel htmlFor='signup-confirm-password-input'>Confirm Password</InputLabel>
                                    <Input type='password' autoFocus onChange={this.handleChange} value={this.state.confirmPassword} name="confirmPassword"/>
                                </FormControl>
                                

                                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} onClick={this.handleClick}>Submit</Button>
                            </form>
                            {
                                this.state.signupError?
                                <Typography component='h5' variant='h6' className={classes.errorText}>{this.state.signupError}</Typography>:
                                null
                            }
                        </Paper>

                </main>
            </div>
        )
    }
}

export default withStyles(styles)(SignupComponent)