import React from 'react'
import ReactDOM from 'react-dom'
import {
    render
} from 'react-dom'


export default class StepTwo extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            headlineText: '',
            headlineFont: 'Helvetica',
            headlineColor: 'White',
            headlineLength: 0,
            revealNum: 2
        }

        this.writeHeadlineChild = this.writeHeadlineChild.bind(this);
        this.updateHeadlineValue = this.updateHeadlineValue.bind(this);
    }

    stepExpander(e) {

        e.preventDefault();

        this.props.stepExpand(this.state.revealNum)

    }
    
    nextStep(e) {
        
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        
        this.props.addStepThree(3);
        
    }

    updateHeadlineValue(e) {
        
        const { value } = e.target;

        this.setState({
            headlineText: value
        }, this.writeHeadlineChild)
            
        this.setState({
               headlineLength: document.getElementById('headline').value.length
           })
            
    }

    updateFontValue(evt) {

        this.setState({
            headlineFont: evt.target.value
        }, this.writeHeadlineChild)
        
    }
    
    updateColor(e) {
        
        const { value } = e.target;
        
        this.setState({
            headlineColor: value
        }, this.writeHeadlineChild)
        
    }
    

    writeHeadlineChild() {
        this.props.headWriter(this.state.headlineText, this.state.headlineFont, this.state.headlineColor, this.state.headlinePosition);

    }


    render() {

        return (

            <
            div className = {
                this.props.stepHider > 1 ? this.props.stepReveal === 2 ? "step-two show-me" : "step-two step-close" : "step-two hide-me"
            }
            onClick = {
                (e) => {
                    this.stepExpander(e)
                }
            } >

            <
            h3 > Step 2: Write a message < /h3>

            <
            div className = "instructions" >
            Make a message
            for the front of your postcard (75 characters or less, pls) <
            /div>

            <
            form className = "card-form"
            >
            <
            div className = "form-group"
             >
            <
            label htmlFor = "headline"
            className = "form-label" > Your message < /label> <
            textarea className = "form-control"
            id = "headline" onChange = { this.updateHeadlineValue
            } maxLength="75" /> <
            /div>
            <
            div className = "form-group" >
            <
            label htmlFor = "fonts"
            className = "form-label" > Font < /label> <
            select className = "form-control"
            id = "fonts"
            //Calling onInput and onClick allows both Firefox and Chrome to handle the event
            onInput = {
                evt => this.updateFontValue(evt)
            }
            onClick = {
                    evt => this.updateFontValue(evt)
                }     
            >
            <
            option > Helvetica < /option> <
            option > Arial Black < /option> <
            option > Times New Roman < /option> <
            option > Lucida Console < /option> <
            option > Impact < /option> <
            option > Courier New < /option> <
            option > Comic Sans MS < /option> <
            /select> <
            /div> 
            <div className="form-group">
                <label htmlFor="color" className="form-label">Color</label>
                <select className="form-control"
                id = "colors"
                //Calling onInput and onClick allows both Firefox and Chrome to handle the event
                onInput = {
                    evt => this.updateColor(evt)
                } 
                onClick = {
                    evt => this.updateColor(evt)
                } 
                >
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
                <option>Orange</option>
                <option>Pink</option>
                <option>Purple</option>
                </select>
            </div> 
            <div className = "form-group">
                <label htmlFor="position" className="form-label">Position</label>
                <div className="instructions position-txt">
                    Click and drag to position your message on the postcard
                </div>
            </div>
            <div className="form-group">
            <button className={this.state.headlineLength < 1 ? "card-form-btn-inactive" : "card-form-btn-active"}
            onClick={ (e) => {
                    this.nextStep(e)
                }
            }>
            Choose message 
            </button>
            </div>
            </form>

            </div>
        )
    }

}
