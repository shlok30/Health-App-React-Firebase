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

import FileUploader from 'react-firebase-file-uploader'

const firebase = require('firebase')

class UploadComponent extends React.Component
{
    constructor()
    {
        super()

        this.state = {
            image:"",
            imageUrl:"",
            progress:0
        }

        this.handleUploadSuccess=this.handleUploadSuccess.bind(this)
    }

    handleUploadSuccess(fileName)
    {
        this.setState(
            {
                image:fileName,
                progress:100
            }
        )

        firebase
         .storage()
         .ref(this.props.user)
         .child(fileName)
         .getDownloadURL()
         .then((url)=>
         {
             this.setState(
                 {
                     imageUrl:url
                 }
             )
         }
         )

             firebase                                                        
             .firestore()
             .collection('data')
             .doc(this.props.user)
             .update(
        {
           image:firebase.firestore.FieldValue.arrayUnion(
               {
                   imageName:this.state.image
                   
               }
           )

        })
    }

    render()
    {
        console.log(this.state)
        const {classes} =  this.props
        return(
                <main className={classes.main}>
                    <CssBaseline></CssBaseline>
                        <Paper className={classes.paper}>
                            <FileUploader 
                                accept="image/*"
                                name='image'
                                storageRef={firebase.storage().ref(this.props.user)}
                                
                                onUploadSuccess={this.handleUploadSuccess}/>

                                <br/>
                                <br/>

                                <img src={this.state.imageUrl} alt=""  height="42" width="42" />

                            
                        </Paper>
                </main>
                
        )
    }
}

export default withStyles(styles)(UploadComponent)