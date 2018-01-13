import React from 'react'
import ReactDOM from 'react-dom'
import {
    render
} from 'react-dom'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


export default class EndModal extends React.Component {

    constructor(props) {
        
        super();
        
        this.state = {
            showEndModal: false,
            revealNum: 1,
            stepHider: 1,
            failShow: false
        };
        
        this.close = this.close.bind(this);
        this.toggleFail = this.toggleFail.bind(this);

    }
    
    close(e) {
                      
        this.props.closeEndModal(this.state.showEndModal, this.state.revealNum, this.state.stepHider); 
        
    }

    open() {
        this.setState({
            showEndModal: true
        });
    }
    
    toggleFail(e) {
        
        e.preventDefault();
        e.stopPropagation();
        
        if (this.state.failShow === false) {
            
            this.setState({
                failShow: true
            });
            
            
        } else {
            
            this.setState({
                failShow: false
            })
            
        }
        
    }


    render() {

        return (
            
            <
            Modal show = {
                this.props.showEndModal
            }
            onHide = {
                this.close
            } >
            <
            Modal.Header closeButton >
            <
            Modal.Title > You've got a new postcard! <FaEnvelope />  < /Modal.Title> <
            /Modal.Header> <
            Modal.Body >
            <
            h4 > Now download, print, and   send < /h4> <
            p className="mod-graph"><br /> After your postcard has downloaded, you can print it as a double-sided page, cut it out, and send it out into the world.
            <br/><br/>
            Thanks for using Postcards From Anywhere. Come back soon!
            </p>
            <div className="fail">
                <div className="fail-trig"
                    onClick = {
                        evt => this.toggleFail(evt)
                    }
                >
                    Wait! My postcard didn't download
                </div>
                <ul className={
                    this.state.failShow === true ? "fail-txt s" : "fail-txt"
                }>
                        <li>
                            <div className="fail-head">Are you using Safari?</div>
                            Unfortunately, Safari's security settings don't allow for the postcards you make on Postcards From Anywhere to download. If you're running into this problem, try making your postcard using a different browser.
                        </li>
                        <li>
                            <div className="fail-head">Did you browser block the download?</div>
                            Check and see if your browser blocked the download of your postcard. Sometimes browsers can misinterpret downloads as pop-ups or spam.
                        </li>
                        <li>
                            <div className="fail-head">Is your browser up to date?</div>
                            Some older browsers don't support the technologies on which Postcards From Anywhere depends. Try updating your browser and giving it another shot.
                        </li>
                </ul>
            </div>
                    
            <div>
                <button className="card-form-btn-active" onClick = {
                    (e) => {
                        this.close(e)
                    } 
                }>Make another postcard</button>
            
                <a href="http://citytechcedev.org/fssa/sdanaher/postcards-from-anywhere/">
                    <div className="card-form-btn-active">
                        Return to main page
                    </div>
                </a>

            </div>
                
            <p><span className="credit">Developed by <a href="http://shanemadethat.com/" target="_blank">Shane Danaher</a></span>< /p>

           <
            /Modal.Body> <
            Modal.Footer >
            <
            Button onClick = {
                (e) => {
                    this.close(e)
                }
            } > Close < /Button> <
            /Modal.Footer> <
            /Modal> 
            
        )
    }

}
