import React from 'react'
import './slider.scss'
import ImageComponent  from './imgComp'
const firebase = require("firebase")
class SliderComponent extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            x:0,
            imageName:[],
            imageUrl:""
        }
        
        
    }

    componentDidMount()
    {
        console.log(this.props.location.state)

        this.setState(
            {
                imageName:this.props.location.state.image
            }
        )










        firebase
         .storage()
         .ref(this.props.location.state.email)
         .child(this.state.imageName[0].imageName)
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
        console.log(this.state.sliderArray)
        
        return(
            <div className='slider'>
            
                
                    <div className='slide' style={{transform:`translateX(${this.state.x}%)`}}><ImageComponent src={this.state.imageUrl} /> </div>
            
            
            <button id='goLeft' onClick={this.handleClick}>left</button>
            <button id='goRight' onClick={this.handleClick}>right</button>
            </div>
        )
    }
}

export default SliderComponent