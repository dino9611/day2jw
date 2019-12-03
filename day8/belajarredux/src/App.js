import React from 'react';

import Header from './components/header'
import Hitungkata from './pages/hitungkata'
import Homepage from './pages/homepage'
import Parkir from './pages/parkir'
import './App.css';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path={'/'} exact component={Homepage}/>
        <Route path={'/hitungkata'} exact component={Hitungkata}/>
        <Route path='/parkir' exact component={Parkir}/>
      </Switch>
    </div>
  );
}

export default App;
