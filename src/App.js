import logo from './logo.svg';
import React from 'react';
import './App.css';
import logo1 from './logoBridgelabz.jpg';

class App extends React.Component{
  
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: '', 
      nameError: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z//s]{2,}$');
    this.setState({ userName: event.target.value})
    if(nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else {
      this.setState({nameError: 'Name is incorrect'})
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src = {logo1} onClick = {this.onClick} alt = "Bridgelabz"/>
        </div>
        <div>
          <input onChange = {this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
        </div>
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
