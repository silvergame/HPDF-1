import React, { Component } from 'react';

import Homepage from './components/Homepage.js';
import Search from './components/Search.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
/*
In the render method change <Homepage/> to <Search/> to view Search page for aadhaar.....

*/
class App extends Component {
  render() {
    return (
<MuiThemeProvider>
        <div>
          <Homepage />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
