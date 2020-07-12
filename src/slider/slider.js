import React from 'react'
import './slider.scss'
import ImageComponent  from './imgComp'
const firebase = require("firebase")
class SliderComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            x:0,
            imageName:this.props.location.state.image,
            imageUrl:"",
        }
        this.handleClick = this.handleClick.bind(this)
        
        
        
    }


   handleClick(event)
   {
       if(event.target.id === 'goLeft')
       {
           if(this.state.x === 0)
           {
               this.setState(
                   {
                       x:-100*(this.state.imageName.length -1)
                   }
               )
           }
           else
           {
               this.setState((prev)=>
               {
                   return(
                       {
                           x:prev.x +100
                       }
                   )
               }

               )
           }
       }

       else
       {
           if(this.state.x === -100*(this.state.imageName.length -1))
           {
               this.setState(
                   {
                       x:0
                   }
               )
           }

           else
           {
               this.setState((prev)=>
               {
                   return(
                       {x:prev.x -100}
                   )
               })
           }

       }

       
   }

       render()
    {
        
        
        return(
            <div className='slider'>

            {this.state.imageName.map((_name,_index)=>
            {
                return(
                    <div className='slide' key={_index} style={{transform:`translateX(${this.state.x}%)`}}><ImageComponent src={_name} user={this.props.location.state.email}/> </div>

                )
            })}
            
                
                    
            
            
            <button id='goLeft' onClick={this.handleClick}>left</button>
            <button id='goRight' onClick={this.handleClick}>right</button>
            </div>
        )
    }




    
}

export default SliderComponent