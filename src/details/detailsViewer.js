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

const firebase = require('firebase')

class DetailsViewerComponent extends React.Component
{
    constructor()
    {
        super()

        this.state={
            email:"",
            allergies:"",
            bloodGroup:"",
            cholestrolLevel:"",
            currentDisease:"",
            diabetes:"",
            height:"",
            highBloodPressure:"",
            weight:""
        }

        this.handleChange = this.handleChange.bind(this)

        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(event)
    {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    

    handleClick(event)
    {
        event.preventDefault()
        console.log(this.state)

        firebase
         .firestore()
         .collection('data')
         .doc(this.props.email)
         .update(
        {
            allergies:this.state.allergies,
            bloodGroup:this.state.bloodGroup,
            cholestrolLevel:this.state.cholestrolLevel,
            currentDisease:this.state.currentDisease,
            diabetes:this.state.diabetes,
            height:this.state.height,
            highBloodPressure:this.state.highBloodPressure,
            weight:this.state.weight

        }
         )
         
        


    }

    render()
    {
        const {classes} = this.props

        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                    <Paper className={classes.paper}>
                         <Typography component='h1' variant='h5'>
                                Fill in your details!
                         </Typography>
                            <form className={classes.form}>
                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Allergies</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.allergies} name="allergies"/>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Blood Group</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.bloodGroup} name="bloodGroup" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Cholestrol Level</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.cholestrolLevel} name="cholestrolLevel" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Current Disease</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.currentDisease} name="currentDisease" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Diabetes</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.diabetes} name="diabetes" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Weight</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.weight} name="weight" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Height</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.height} name="height" />
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >High Blood Pressure</InputLabel>
                                    <Input  autoFocus onChange={this.handleChange} value={this.state.highBloodPressure} name="highBloodPressure" />
                                </FormControl>

                                  <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} onClick={this.handleClick}>Submit</Button>
                            </form>
                    </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(DetailsViewerComponent)