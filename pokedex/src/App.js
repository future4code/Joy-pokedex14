import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import {Home} from './components/Home';
import {Pokedex} from './components/Pokedex';

 const App = () => {

return (
  <BrowserRouter>

  <Switch>  

      <Route exact path={"/"} component={Home}>
      
      </Route>

      <Route exact path={"/pokedex"} component={Pokedex}>
      
      </Route>

      </Switch>
     
  </BrowserRouter>
 );
}
export default App;
      


