import React from 'react' ;
import Signup from '../signup/Signup';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';
import Greet from '../greet/Greet';

const Home =() => {
  return(
    <React.Fragment>

      <div className="home">

        <div className="wrapper">
       
          <br />
          <hr />
          <br />
          <Signup/>
          <br />
          <hr />
          <br />
       
          <Login/>
          <br />
          <hr />
          <br />
          <Greet/>
          
        </div>
        
      </div>


    </React.Fragment>
  )
}



export default Home ;