import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
