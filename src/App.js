import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
            <h1>Button Component from @material-ui/core/Button, overriden by src/@material-ui/core/Button</h1>
            <Button>Hello</Button>
          </div>
          <div>
            <h1>TextField Component from @material-ui/core/TextField, not overriden.</h1>
            <TextField id="outlined-basic" label="Outlined" variant="filled" color="white" />
          </div>
      </header>
    </div>
  );
}

export default App;
