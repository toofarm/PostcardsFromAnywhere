import React, {
    Component
} from 'react';
import Slide from './Slide'

export default class Slider extends Component {

    constructor(props) {

        super(props);

        this.state = {
            pic: "url(./assets/mntns2-med-2200.jpg)"
        }
        
    }    

    render() {
        
        return ( <div className = "slider" >
                <Slide />
            </div>
        );
    }

}
