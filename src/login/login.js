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

const firebase = require("firebase")

class LoginComponent extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email:"",
            password:"",
            loginError:""
            }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount()
    {   
     {/*   let user = []
        let pass = []
        const url = window.location.href
        const id = url.substring(url.lastIndexOf('?') + 1);
        let i = 5;
        let y = 0;
        let z = 0;
        for(i,y;id[i] !== '&';i++,y++)
        {
            user[y] = id[i]
        }
       
       console.log("value of counter is",i)
        const password = url.substring(url.lastIndexOf('=') + 1);
        console.log("username is",user.join(""))
        console.log("password is",password)

        firebase
         .auth()
         .signInWithEmailAndPassword(user.join(""),password)
         .then(()=>{
             this.props.history.push({
                 pathname:'/dashboard',
                 state: { email: user.join("") }
             })
         },err=>{
             this.setState({loginError:err.code})
             console.log(err)
         })

     */}
    }

    handleChange(event)
    {
        this.setState(
           { [event.target.name]:event.target.value  }
        )
    }

    handleClick(event)
    {
        event.preventDefault()
        
        firebase
         .auth()
         .signInWithEmailAndPassword(this.state.email,this.state.password)
         .then(()=>{
             this.props.history.push({
                 pathname:'/dashboard',
                 state: { email: this.state.email }
             })
         },err=>{
             this.setState({loginError:err.code})
             console.log(err)
         })

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
                                Login In!
                            </Typography>
                            <form className={classes.form}>
                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel htmlFor='login-email-input'>Email</InputLabel>
                                    <Input autoComplete='email' autoFocus onChange={this.handleChange} value={this.state.email} name="email"/>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel htmlFor='login-password-input'>Password</InputLabel>
                                    <Input type='password' autoFocus onChange={this.handleChange} value={this.state.password} name="password" />
                                </FormControl>
                                

                                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} onClick={this.handleClick}>Submit</Button>
                            </form>
                            {
                                this.state.loginError?
                                <Typography component='h5' variant='h6' className={classes.errorText}>{this.state.loginError}</Typography>:
                                null
                            }
                        </Paper>

                </main>
            </div>
        )
    }
}

export default withStyles(styles)(LoginComponent)