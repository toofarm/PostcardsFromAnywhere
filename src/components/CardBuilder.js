import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import EndModal from './EndModal'
import axios from 'axios'
import domtoimage from 'dom-to-image'

export default class CardBuilder extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            canvasImage: "",
            stepHider: 1,
            stepReveal: 1,
            canvasReveal: false,
            showEndModal: false
        }
        
        this.getLocation = this.getLocation.bind(this);
        this.addStep = this.addStep.bind(this);
        this.addStepThree = this.addStepThree.bind(this);
        this.addStepFour = this.addStepFour.bind(this);
        this.stepExpand = this.stepExpand.bind(this);
        this.writeHeadline =
        this.writeHeadline.bind(this);
        this.makeCardBack = this.makeCardBack.bind(this);
        this.writeAddress = this.writeAddress.bind(this);
        this.downloadCard = this.downloadCard.bind(this);
        this.toggleEndModal = this.toggleEndModal.bind(this);
    
    }
    
    componentDidMount = () => {
        
        var self = this;
        
        var canvas = document.querySelector('#card-maker');
        var ctx = canvas.getContext('2d');
        
        //Calculates canvas height
        var canvasHolder = document.querySelector('.canvas');
        calcShellHeight(canvasHolder);
        
        function calcShellHeight(canvasHolder) {
        
            var width = canvasHolder.offsetWidth;
            var height = width / 1.7;
            
            canvasHolder.style.height = height + "px";
        }
        
        fitToContainer(canvas);

        function fitToContainer(canvas){
            // Make it visually fill the positioned parent
            canvas.style.width ='100%';
            canvas.style.height='100%';
            // ...then set the internal size to match
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        function doCanvas() {
            ctx.font = '45px Yantramanav';
            ctx.fillStyle = "#D2D7DB";
            ctx.fillText('Postcard coming soon', canvas.width / 6, canvas.height / 2);
        }
        
        doCanvas();
        
        function make_base() {
          var base_image = new Image();
          base_image.src = self.state.canvasImage;
          base_image.onload = function(){
            ctx.drawImage(base_image, 0, 0);
          }
        }

        make_base();
        
    }
    
    // Handle accordian behavior
    addStep(s) {
        
        var self = this;
        
        self.setState({
            stepHider: s
        }) 
        
    }
    
    addStepThree(n) {
        
        var self = this;
        
        this.addStep(3);
        
        this.stepExpand(3);
        
        self.setState({
            canvasReveal: true
            }, this.makeCardBack 
            );
        
        }
    
    addStepFour() {
        
        this.addStep(4);
        
        this.stepExpand(4);
        
    }
    
    stepExpand(n) {
        
        var self = this;
        
        self.setState({
            stepReveal: n
        }) 
        
    }

    //Open end modal
    toggleEndModal(s, r, h) {
            
        var self = this;

        self.setState({
                showEndModal: s,
                stepReveal: r,
                stepHider: h
            }, () => {
                document.getElementById('location').focus();
            });
        
        
        
        }
    
    //Call to Google Maps API 
    getLocation(l) {
        
        var self = this;
        
        var canvasHolder = document.querySelector('.canvas');
        var w = canvasHolder.offsetWidth;
        var h = w / 1.7;
        var h = h.toFixed();
        
        var request = 'https://maps.googleapis.com/maps/api/streetview?size=' + w + 'x' + h + '&location=' + l + '&pitch=-0.76&key=AIzaSyB6tttgOrGhz7mgi7FjpWTwMXmyeRhMHoY';
            
            axios.get(request)
              .then(function (response) {
                
                var p = response.request.responseURL;
                
                self.setState({
                    canvasImage: p
                })
                
                function make_base() {
                        var canvas = document.querySelector('#card-maker');
                        var ctx = canvas.getContext('2d');
                        var base_image = new Image();
                        base_image.onload = function(){
                                ctx.drawImage(base_image, 0, 0);
                              }
                        base_image.crossOrigin ="Anonymous";
                        base_image.src = self.state.canvasImage;
                    }

                make_base();
                
                self.addStep(2);
                self.stepExpand(2);
                
              })
              .catch(function (error) {
                console.log(error);
              });
            
        }
    
    // Write text to front of card
    writeHeadline(t, f, c, p) {
                
                if ( p === "Top" ) {
                    p = "-230%";
                } else if ( p === "Bottom" ) {
                    p = "120%";
                } else {
                    p = "-50%";
                }

                var headline = document.querySelector('.headline');

                function headlinePreview() {
                    headline.innerHTML = t;
                    headline.style.fontFamily = f;
                    headline.style.color = c;
                    headline.style.transform = "translate(-50%," + p + ")";
                }

                headlinePreview();

        }
    
    //Reveal second side of the card
    makeCardBack() {
            
            var self = this;
        
            var canvasHolder = document.querySelector('.canvas2');
            var w = canvasHolder.offsetWidth;
            var h = w / 1.7;
            var h = h.toFixed();
            
            var canvas = document.querySelector('#back-maker');
            var ctx = canvas.getContext('2d');
            
            calcShellHeight(canvasHolder);
            
            function calcShellHeight(canvasHolder) {
            
                var width = canvasHolder.offsetWidth;
                var height = width / 1.7;

                canvasHolder.style.height = height + "px";

            }

            function fitToContainer(canvas){
                // Make it visually fill the positioned parent
                canvas.style.width ='100%';
                canvas.style.height='100%';
                // ...then set the internal size to match
                canvas.width  = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
            
            fitToContainer(canvas);
        
            function make_base() {
                        var canvas = document.querySelector('#back-maker');
                        var ctx = canvas.getContext('2d');
                        var base_image = new Image();
                        base_image.onload = function(){
                                ctx.drawImage(base_image, 0, 0);
                              }
                        base_image.src = "./assets/postcard-back.jpeg";
                    }

                make_base();
            
        
        }

    //Write address info to back of card
    writeAddress(n, a, c, s, z) {
        
        var lineOne = document.querySelector("#name");
        var lineTwo = document.querySelector("#address");;
        var lineThreeA = document.querySelector("#city-field");        
        var lineThreeB = document.querySelector("#state-field");        
        var lineThreeC = document.querySelector("#zip-field");        
        
        function addressWrite() {
            lineOne.innerHTML = n;
            lineTwo.innerHTML = a;
            lineThreeA.innerHTML = c + ",";
            lineThreeB.innerHTML = s;
            lineThreeC.innerHTML = z;
        }
        
        addressWrite();
        
    }

    //Write user inputs to canvas and download
    downloadCard(e) {
        
        e.preventDefault();
        e.stopPropagation();
        
        var self = this;
        
        var headline = document.querySelector('#headline-uber-holder');
        var canvas = document.getElementById('card-maker');
        var context = canvas.getContext('2d');
        var html_container = document.querySelector('#headline-uber-holder');
        var html = html_container.innerHTML;
        
        domtoimage.toJpeg(document.getElementById('card-maker-holder'), { quality: 1 })
            .then(function (dataUrl) {
                var link = document.getElementById('downloader-hidden');
                link.download = 'my-postcard.jpeg';
                link.href = dataUrl;
                link.click();
            });
        
        domtoimage.toJpeg(document.getElementById('back-maker-holder'), { quality: 1 })
            .then(function (dataUrl) {
                var link = document.getElementById('downloader-hidden');
                link.download = 'my-postcard-back.jpeg';
                link.href = dataUrl;
                link.click();
            });
        
        //Opens modal
        self.toggleEndModal(true);
        
    }

    
    render() {
        
        return (
            
            <div className="ui-holder container-fluid">
            
            <div className="row canvas-shell">
            
                <div className="col-lg-6 col-lg-push-1">
                    <div id="card-maker-holder" className="canvas" style={{"position": 
                    this.state.canvasReveal === true ? "relative" : "fixed"     
                    }}>
                        <canvas id="card-maker">

                        </canvas>
                        <div id="headline-uber-holder">
                            <div className="headline" id="headline-holder">
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div id="back-maker-holder" className="canvas2" style={{"display": 
                    this.state.canvasReveal === true ? "block" : "none"     
                    }}>
                        <canvas id="back-maker">
            
                        </canvas>
                        <div id="name" className="recipient"></div>
                        <div id="address" className="recipient"></div>
                        <ul id="address-ln2" className="recipient">
                                <li id="city-field"></li>
                                <li id="state-field"></li>
                                <li id="zip-field"></li>
                        </ul>
                    </div>
                </div>
            
                <div className="ui-column col-lg-4 col-lg-push-1">
            
                    <StepOne stepReveal={this.state.stepReveal} sendLocation={this.getLocation} stepExpand={this.stepExpand} />
            
                    <StepTwo 
                        stepReveal={this.state.stepReveal} 
                        stepHider={this.state.stepHider}
                        headWriter = {this.writeHeadline}
                        stepExpand={this.stepExpand}
                        addStepThree={this.addStepThree}
                    />
            
                   <StepThree 
                        stepReveal={this.state.stepReveal} 
                        stepHider={this.state.stepHider}
                        stepExpand={this.stepExpand}
                        writeAddress={this.writeAddress}
                        addStepFour={this.addStepFour}
                        />
            
                    <StepFour 
                        stepHider={this.state.stepHider}
                        stepReveal={this.state.stepReveal}
                        downloadCard={this.downloadCard}
                    />
            
                    <EndModal 
                        showEndModal={this.state.showEndModal}
                        closeEndModal={this.toggleEndModal}
                        stepExpand={this.stepExpand}
                        addStep={this.addStep}
                    />
            
                    <a id="downloader-hidden">Download</a>

                </div>
        
            </div>
            
            
            </div>
        
        )
        
    }
    
}