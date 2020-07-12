import React from 'react'
const firebase = require("firebase")
class ImageComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            imageName:this.props.src.imageName,
            imageUrl:""
        }
        
    }

    componentDidMount()
    {
        firebase
         .storage()
         .ref(this.props.user)
         .child(this.state.imageName)
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

    }

    render()
    {
        console.log(this.state.imageUrl)
        let imgStyles ={
            width: 50 + "%",
            height:80 + 'vh',
            marginLeft:25 + "%"
        }
        return(
            <img src={this.state.imageUrl} alt='https://images.app.goo.gl/tQidWfZZ4EAzThup6' style={imgStyles}></img>
        )
    }
}

export default ImageComponent