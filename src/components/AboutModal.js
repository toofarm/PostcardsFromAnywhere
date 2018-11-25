import React from 'react'
import ReactDOM from 'react-dom'
import {
    render
} from 'react-dom'
import '../stylesheets/core-styles.scss'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


export default class ModalMaker extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }


    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }


    render() {
        return ( 
        <div>
            <div
            className="trig"
            onClick = {
                this.open.bind(this)
            }>
                About 
            </div>

            <Modal show = {
                this.state.showModal
            }
            onHide = {
                this.close
            } >
                <Modal.Header closeButton >
                    <Modal.Title> Postcards From Anywhere </Modal.Title> 
                </Modal.Header> 
                <Modal.Body >
                    <h4> Make your own custom postcards </h4> 
                    <p> Postcards From Anywhere is a web application that allows you to make custom postcards using the Google Street View API. To make a postcard:
                    </p>
                        <p>- Select a location</p>
                        <p>- Write your custom message</p>
                        <p>- Download the results and print</p>
                            
                    <p>The application is free to use. Enjoy!</p>
                        
                    <p>
                        <span className="credit">Developed by <a href="http://shanemadethat.com/" target="_blank">Shane Danaher</a></span>
                    </p>
            </Modal.Body> 
            <Modal.Footer >
                <Button onClick = {
                    this.close
                } > 
                    Close 
                </Button> 
            </Modal.Footer> 
            </Modal> 
        </div>

        );
    }
}
