import React, { Component } from 'react';

import homepage from './components/homepage.js';
import search from './components/search.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
<MuiThemeProvider>
        <div>
          <homepage />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
