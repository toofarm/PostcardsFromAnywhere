import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import './stylesheets/core-styles.scss'
import './stylesheets/media-styles.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Intro from './components/intro'
import { Heading } from './components/nav'
import Slider from './components/Slider'


window.React = React
    
render(
    <Heading/>,
    document.getElementById('head-container')
);


render(
    <Intro/>,
    document.getElementById('intro-container')
    );

