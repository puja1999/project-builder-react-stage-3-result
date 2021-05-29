import React, { Component } from 'react';
//import RouterToComp from './components/RouterToComp';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';

class App extends Component{
  constructor(){
    super()
    this.state={
      correct: 0,
      attempt: 0
    }
  }
  checkCorrect = () => {
    this.setState({
      correct: this.state.correct+1
    })
  }

  isAttempt = () =>{
    this.setState({
      attempt: this.state.attempt+1
    })
  }

  render(){

  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = '/'>
           <Home />
         </Route>
         <Route path="/Quiz">
           <Quiz checkCorrect={this.checkCorrect} isAttempt={this.isAttempt}/>
         </Route>
         <Route>
           <Route path="/Result">
             <Result {...this.state}/>
           </Route>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}
}
export default App;
