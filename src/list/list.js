import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import './styles.css'

class ListComponent extends React.Component
{
    constructor()
    {
        super()
        
        this.handleClick = this.handleClick.bind(this)
    }

        
    handleClick(event)
    {
        console.log(event.target.name)

        this.props.details(event.target.name)
    }

    changeBackground(event)
    {
        event.target.style.color = "#fff"
    }

    revertBackground(event)
    {
        event.target.style.color = '#bdb8d7'
    }

    render()
    {
        const myButton =  {
                            backgroundColor: '#4CAF50', /* Green */
                            border: 'none',
                            color: '#bdb8d7',
                            padding: '15px 32px',
                            textAlign:' start',
                            textDecoration: 'none',
                            display: 'inlineBlock',
                            fontSize:'16px',
                            width:'100%',
                            background:'transparent',
                            borderBottom:'rgba(0, 0, 0,0.05) 1px solid',
                            borderTop:'rgba(225,225,225,0.05) 1px solid',
                            
                            }

        const {classes} = this.props
        
        return (

            <main className={classes.root}>

                <h3 id="title">HealthGear</h3>
    
                <button 
                name='viewDetails'
                onClick={this.handleClick}
                style={myButton}
                onMouseOver={this.changeBackground}
                onMouseOut={this.revertBackground}
                className={classes.newChatBtn}>View Details</button>

                <button 
                name='editDetails'
                onClick={this.handleClick}
                style={myButton}
                onMouseOver={this.changeBackground}
                onMouseOut={this.revertBackground}
                className={classes.newChatBtn}>Edit Details</button>

                <button 
                name='uploadFile'
                onClick={this.handleClick}
                style={myButton}
                onMouseOver={this.changeBackground}
                onMouseOut={this.revertBackground}
                className={classes.newChatBtn}>Upload Reports</button>

                <button 
                name='viewFile'
                onClick={this.handleClick}
                style={myButton}
                onMouseOver={this.changeBackground}
                onMouseOut={this.revertBackground}
                className={classes.newChatBtn}>View Reports</button>
                <List></List>
            </main>

        )
    }
}

export default withStyles(styles)(ListComponent)