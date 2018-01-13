import React, { Component } from 'react';

const SlideThree = (props) => {
    
    let background = {
        
        backgroundImage: 'url(/assets/forest-med-3200.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
    }
    
    return <div style={background} className="slide"></div>
    
}

export default SlideThree;