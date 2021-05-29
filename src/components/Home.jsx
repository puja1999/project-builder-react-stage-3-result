import React, {Component} from 'react';
import '../styles/home.css';
import {Link} from 'react-router-dom';

 class Home extends Component{
    render(){
        return(
            <div className="home-parent">
            <div className="home-cont">
                <h1>Quiz App</h1>
                <Link to="/quiz"><button>Play</button></Link>
            </div>
            </div>
        )
    }
}
export default Home;