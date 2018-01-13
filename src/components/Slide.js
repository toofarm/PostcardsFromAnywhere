import React, { Component } from 'react';

export default class Slide extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            slideNum: 1
        }
        
    }

    render() {
        
        let picList = [
            "url(./assets/mntns2-med-2200.jpg)",
            'url(./assets/forest-med-3200.jpg)',
            'url(./assets/mntns-high-3200.jpg)'
        ]
        
        
            return (
                <div style={{"backgroundImage": 
                    this.state.slideNum === 1 ? picList[0] : this.state.slideNum === 2 ? picList[1] : picList[2]
                 
                }} className="slide"></div>
            );
    
    }
    
    componentDidMount = () => {

            setInterval(function () {

                if (this.state.slideNum === 3) {

                    this.setState({

                        slideNum: this.state.slideNum - 2

                    })


                } else {

                    this.setState({

                        slideNum: this.state.slideNum + 1

                    })

                }

            }.bind(this), 9000);

    }
}
