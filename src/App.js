import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {toast} from 'react-toastify'


class App extends Component {

  notify = () => {
    toast("Default Notification !");
  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER
  });
  toast.error("Error Notification !", {
    position: toast.POSITION.TOP_LEFT
  });
  toast.warn("Warning Notification !", {
    position: toast.POSITION.BOTTOM_LEFT
  });
  toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER
  });
  toast("Custom Style Notification !", {
    position: toast.POSITION.BOTTOM_RIGHT,
  //  className: css({
  //    background: "black"
  //  })
  });
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.notify}>Notify</button>
        </p>
      </div>
    );
  }
}

export default App;
