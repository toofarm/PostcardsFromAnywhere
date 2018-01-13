import React, { Component } from 'react';

const SlideOne = (props) => {
    
    let background = {
        
        backgroundImage: 'url(/assets/mntns2-med-2200.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
    }
    
    return <div style={background} className="slide"></div>
    
}

export default SlideOne;