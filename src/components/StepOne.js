import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'

export default class StepOne extends React.Component {
    
    constructor(props) {
        
            super(props);
        
            this.state={
                inputValue: '',
                revealNum: 1
            }
        
            this.getLocationChild = this.getLocationChild.bind(this);
            this.stepExpander = this.stepExpander.bind(this);
            
            
        }
    
        updateInputValue(evt) {
            
            this.setState({
                        inputValue: evt.target.value
                    })
        }
    
        getLocationChild(e) {
            
            e.preventDefault();

            this.props.sendLocation(this.state.inputValue)
        }
    
        stepExpander(e) {
            
            e.stopPropagation();
            
            this.props.stepExpand(this.state.revealNum)
            
        }
    
            render() {

                return (

                <div className={this.props.stepReveal === 1 ? "step-one" : "step-one step-close"} onClick={(e) => {this.stepExpander(e)}}>

                                    <h3>Step 1: Pick a place</h3>

                                    <div className="instructions">
                                    Type an address or the name of a place (555 Maple Ln, the Great Pyramid of Giza, etc)
                                    </div>

                                    <form className="card-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="location" value={this.state.inputValue} onChange=
                                                {
                                                evt => this.updateInputValue(evt)
                                            } />
                                        </div>
                                        <button className={this.state.inputValue === '' ? "card-form-btn-inactive" : "card-form-btn-active"}
                                        onClick={(e) => {this.getLocationChild(e)}}>
                                            Choose place 
                                        </button>
                                    </form>

                </div>
                )
            }
    
}