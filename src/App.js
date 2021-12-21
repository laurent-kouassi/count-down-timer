import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Timer from './components/timer/index.js';

const title = "Timer";
const { useState } = React;

const  App = (props) => {
  const {
    initial
  } = props;

const [remainingTimer, setRemainingTimer] = useState();

  return (
    <div>
      <nav className="app-header layout-row align-items-center justify-content-center">
        <div className="layout-row align-items-center">
          <img alt="" src={logo} className="logo"/>
          <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
        </div>
      </nav>
      {remainingTimer}
      <Timer 
        initial={initial} 
        callback = {remain_time => setRemainingTimer(remain_time)}
      />
    </div>
  );
}


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="app-header layout-row align-items-center justify-content-center">
//           <div className="layout-row align-items-center">
//             <img alt="" src={logo} className="logo"/>
//             <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
//           </div>
//         </nav>
//         <Timer initial={this.props.initial}/>
//       </div>
//     );
//   }
// }

export default App;
