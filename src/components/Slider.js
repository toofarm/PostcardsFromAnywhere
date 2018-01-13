import React, {
    Component
} from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import Slide from './Slide'

export default class Slider extends Component {

    constructor(props) {

        super(props);

        this.state = {

            pic: "url(./assets/mntns2-med-2200.jpg)"

        }
        
    }    

    render() {
        
        return ( <
            div className = "slider" >
                
                <Slide />
                
            </div>
        );
    }

}
