import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Etusivu from './Etusivu';
import SearchList from './SearchList';
import React, {useState} from 'react';
import MenuComponent from './MenuComponent';

export default function App(){

  const [haut, setHaut] = useState([]);

  return(
    <BrowserRouter>
        <div>
          <MenuComponent />
          <Switch>
            <Route path='/' exact render={ (props) => <Etusivu {...props} haut={haut} setHaut={setHaut}/>}/>
            <Route path='/lista/' render={ (props) => <SearchList {...props} haut={haut}/>}/>
            <Route component={App}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}