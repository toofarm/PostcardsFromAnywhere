import React from 'react'
import ReactDOM from 'react-dom'
import {
    render
} from 'react-dom'


export default class StepThree extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            revealNum: 4,
        }
        
        this.downloadCardChild = this.downloadCardChild.bind(this);
        
    }

    downloadCardChild(e) {
        
        e.preventDefault;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        
        this.props.downloadCard(e);
        
    }

    render() {

        return (

            <div className = {
                this.props.stepHider > 3 ? "show-me" : "hide-me"
            }>
            <form className="card-form">
            <div className="form-group">
                <a id="download" target="_blank">
                    <button className="card-form-btn-active dwnld-btn"
                    onClick={ (e) => {
                            this.downloadCardChild(e)
                        }
                    }>
                    Download postcard 
                    </button>
                </a>
            </div>
            </form>

            </div>
        )
    }

}
