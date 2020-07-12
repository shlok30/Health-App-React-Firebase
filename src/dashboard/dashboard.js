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

import ListComponent from '../list/list'

import DetailsViewerComponent from '../details/detailsViewer'

import UploadComponent from '../upload/upload'

import SliderComponent from '../slider/slider'

import './styles.css'

const firebase = require('firebase')

class DashboardComponent extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email:"",
            details:[],
            view:"viewDetails",
            image:[]

        }

        this.details =  this.details.bind(this)
    }

    details(event)
    {
       /* if(event === 'viewDetails')
        {
            this.setState(
                {
                    viewDetails:true,
                    editDetails:false,
                    uploadFile:false
                }
            )
        }

        else if(event === 'editDetails')
        {
            this.setState(
                {
                    viewDetails:false,
                    editDetails:true,
                    uploadFile:false
                }
            )

        }

        else if(event === 'uploadFile')
        {
            this.setState(
                {
                    viewDetails:false,
                    editDetails:false,
                    uploadFile:true
                }
            )

        }

        else
        {
            this.props.history.push({
                 pathname:'/view',
                 state: { email: this.state.email,
                        image:this.state.image }
             })
        }  */
        if(event !== 'viewFile'){
            this.setState({
            view:event
        })
        }

        else{
            this.props.history.push({
                 pathname:'/view',
                 state: { email: this.state.email,
                        image:this.state.image }
             })
        }
        


    }

    componentDidMount()
    {
        firebase
        .auth()
        .onAuthStateChanged(async _usr =>
        {
            if(!_usr)
            {
                this.props.history.push('/login')
            }
            else
            {
                await firebase
                       .firestore()
                       .collection('data')
                       
                       .onSnapshot(async res =>
                       {
                           const t = res.docs.filter(_doc => _doc.id === _usr.email)[0]
                           const details = t.data()
                           await this.setState(
                               {
                                   email:_usr.email,
                                   details:details,
                                   image:details.image
                               }
                           )
                           
                       })
            }
        })
    }




     render()
    {
        const {classes} = this.props
        

        console.log(this.state.image)

        return(
        <div>
            <ListComponent 
            details={this.details}/>
            <main className={classes.main}>
                <h1 id="welcome">Welcome {this.state.email} </h1>
                <CssBaseline></CssBaseline>
                {this.state.view === 'viewDetails'? <Paper className={classes.paper}>
                         <Typography component='h1' variant='h5'>
                                Check Your Details
                         </Typography>
                            <form className={classes.form}>
                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Allergies</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.allergies}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Blood Group</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.bloodGroup}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Cholestrol Level</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.cholestrolLevel}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Current Disease</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.currentDisease}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Diabetes</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.diabetes}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Weight</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.weight}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >Height</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.height}</h3>
                                </FormControl>

                                <FormControl required fullWidth margin='normal'>
                                    <InputLabel >High Blood Pressure</InputLabel>
                                    <h3 className={classes.value}>{this.state.details.highBloodPressure}</h3>
                                </FormControl>

                                  
                            </form>
                    </Paper>:this.state.view === 'editDetails'?
                    <DetailsViewerComponent
                    email={this.state.email} />:this.state.view === 'uploadFile'?
                    <UploadComponent 
                    user={this.state.email}/>:null
                    
                    }
                
                   

                
            </main>
        </div>
        )
    }
}


export default withStyles(styles)(DashboardComponent)