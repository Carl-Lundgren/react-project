import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Likes from './components/Likes'
import Favorites from './components/Favorites'
import Home from './components/Home'
import Nav from './components/Navigation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/likes" component={Likes}/>
          <Route exact path="/favorites" component={Favorites}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
