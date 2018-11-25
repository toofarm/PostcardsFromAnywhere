import React from 'react'
import ReactDOM from 'react-dom'
import {
    render
} from 'react-dom'


export default class StepThree extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            revealNum: 3,
            nameText: '',
            addressText: '',
            cityText: '',
            stateText: '',
            zipText: ''
        }
        
        this.writeRecipientChild = this.writeRecipientChild.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateZip = this.updateZip.bind(this);
        
    }

    stepExpander(e) {

        e.preventDefault();

        this.props.stepExpand(this.state.revealNum)

    }
    
    nextStep(e) {
        
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        
        this.props.addStepFour();
        
    }
    
    updateName(e) {
        
        const { value } = e.target;
        
        this.setState({
            nameText: value
        }, this.writeRecipientChild)
        
    }
    
    updateAddress(e) {
        
        const { value } = e.target;
        
        this.setState({
            addressText: value
        }, this.writeRecipientChild)
        
        console.log('updateAddress firing');
  
    }
    
    updateCity(e) {
        
        const { value } = e.target;
        
        this.setState({
            cityText: value
        }, this.writeRecipientChild)
  
    }
    
    updateState(e) {
        
        const { value } = e.target;
        
        this.setState({
            stateText: value
        }, this.writeRecipientChild)
  
    }
    
    updateZip(e) {
        
        const { value } = e.target;
        
        this.setState({
            zipText: value
        }, this.writeRecipientChild)
  
    }

    writeRecipientChild() {
        
        this.props.writeAddress(this.state.nameText, this.state.addressText, this.state.cityText, this.state.stateText, this.state.zipText);

    }


    render() {

        return (

            <div className = {
                this.props.stepHider > 2 ? this.props.stepReveal === 3 ? "step-two show-me" : "step-two step-close" : "step-two hide-me"
            }
            onClick = {
                (e) => {
                    this.stepExpander(e)
                }
            } >

            <h3> Step 3: Choose recipient </h3>

            <div className = "instructions" >
            Write the name and address of the person who you want to receive your postcard. If you want to write an address by hand, just leave this part blank. </div>

            <form className = "card-form">
            <div className = "form-group">
            <label htmlFor = "name"
            className = "form-label"> Name </label> 
            <input className = "form-control"
            id = "name" 
            onChange = { this.updateName
            } /> </div>
            <div className = "form-group">
            <label htmlFor = "address1"
            className = "form-label" > Address </label> 
                <input className="form-control" id="address1" onChange = { this.updateAddress
            } />
            </div>
            <div className="form-group">
                <label htmlFor="city" className="form-label">City</label>
                <input className="form-control" id="city" onChange = { this.updateCity
            } />
            </div> 
            <div className="form-group">
                <label htmlFor="state" className="form-label">State</label>
                <input className="form-control" id="state" onChange = { this.updateState
            } />
            </div> 
            <div className="form-group">
                <label htmlFor="zip" className="form-label">Zip Code</label>
                <input className="form-control" id="zip" 
                onChange = { this.updateZip
                } />
            </div> 
            <button className="card-form-btn-active"
            onClick={ (e) => {
                    this.nextStep(e)
                }
            }>
            Choose recipient 
            </button>
            </form>

            </div>
        )
    }

}
