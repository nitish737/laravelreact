import React, { useState } from 'react' ;
import './greet.scss' ;


const Greet = () => {
  const [data1, setData1] = useState(null);

  function getData(){
    const xhr = new XMLHttpRequest ;
    xhr.open("GET","http://localhost:8000/api/getall",true)
    xhr.onprogress = function(){
    };
    xhr.onload = function(){
      setData1(JSON.parse(xhr.responseText))
      console.log(data1)
    };
    xhr.send();
  }

  return(
    <React.Fragment>
      <div className="greet">
        <div className="wrapper">
          <h2>Click below to get All the users registered</h2>
          <div className="btn">
            <button onClick={getData}>
              Get All
            </button>
          </div>
          <div className="alldata">
            <div className="table">
              {data1 === null ? null : data1.map((obj,index)=>{
                return(
                  <React.Fragment>
                    {obj.name}
                  </React.Fragment>
                )
              })}
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Greet ;