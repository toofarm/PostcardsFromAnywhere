import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import Slider from './Slider'
import CardBuilder from './CardBuilder'

export default class Intro extends React.Component {
    
    constructor() {
        
        super();
        
        this.state = {fadeThis: false};
        
        this.fadeThis = this.fadeThis.bind(this);
    
    }
    
    fadeThis() {
        
        this.setState({fadeThis: true});
        
    }
    
    render() {
        
    return (
        
        <div className="app-holder">
        
        <div className={this.state.fadeThis === true ? "intro-container-leave" : "intro-container"} >
           <Slider />
            <div className="intro-overlay">

                    <div className='intro-message'> 
                        <span className='intro-txt'> Make your own custom postcards</span>
                        <ul>
                            <li>Choose a location</li>
                            <li>Write your custom message</li>
                            <li>Save and print</li>
                            <a href="#" onClick={this.fadeThis}><li className="txt-link">Get started</li></a>
                        </ul>
                    </div>
        
                    <div className='intro-message-mob'> 
                        <span className='intro-txt'> Thank you for visiting Postcards From Anywhere</span>
                        <ul>
                            <li>Because of the technologies it employs, Postcards From Anywhere works best on desktops, laptops, and larger tablets.</li>
                            <li>If you want to know more about this, please feel free to <a href="mailto:toofarm@gmail.com">email me</a>.</li>
                            <li>Otherwise, I encourage you to check the site out on your laptop. It's pretty cool.</li>
                        </ul>
                    </div>
        
        
        
                </div>
        </div>

        {this.state.fadeThis === true ? <CardBuilder /> : null}
        
        </div>
    );
    }
}



