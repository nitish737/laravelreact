import React from 'react' ;
import Home from '../home/Home';
import {Switch, Route} from 'react-router-dom' ;
import Greet from '../greet/Greet';

const Exporter = () => {
  return(
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>

    </React.Fragment>
  )
}





export default Exporter ;