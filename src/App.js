import logo from './logo.svg';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [pincode,setpincode] = useState("");
  const [postcol,setpostcol] = useState([{}]);
  const getpincodedetails = async ()=>{
        const url = "https://api.postalpincode.in/pincode/"+pincode;
        console.log(url);
         await axios.get(url)
         .then((res)=>{
                if(res.data[0].Status =='Error'){
                 
                  console.log("No data found");
                  setpostcol([res.data[0]])
                  document.getElementById("nrts").innerHTML = "<p>No data Found</p>"
                  console.log(postcol);
                 
                }
                else{
                  console.log("Data Found");
                  setpostcol(res.data[0].PostOffice);
                  console.log(postcol);
                  
                }
              })
         .catch((err)=>{console.log("Error")});
  
  }
  return (
    <div className="App" >
      
  
<section className="background-radial-gradient overflow-hidden" > 
 

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5"  >
    <div className="row gx-lg-5 align-items-center mb-5" >
    <div className="col-lg-6 mb-5 mb-lg-0 position-relative" >

        <div className="card bg-glass" >
          <div className="card-body px-4 py-5 px-md-5" style={{backgroundColor:"rgba(1,1,1,0.6)"}}>
            <form>


              <div className="form-outline mb-4">
                <input type="text" id="pincode" value={pincode} onChange={(event)=>{
                         setpincode(event.target.value);
                }} className="form-control" />
                <label className="form-label" htmlFor="form3Example4">PINCODE</label>
              </div>
          
              <button type="button" onClick={getpincodedetails} className="btn btn-primary btn-block mb-4">
                Get Details
              </button>
              <h3 id="text"></h3>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0" >

      </div>
      

    </div>

    <div className="row row-cols g-3">
    {postcol.map((posts)=>{
      if(postcol.length >1){
      return  ( 
        <div className='col'>
      <div className="card" style={{width: "18rem;",backgroundColor:"rgba(0,0,0,0.08)"}}>
      <div className="card-body">
          {Object.keys(posts).map((key)=>{
            return (
              <div><h5 style={{display:"inline"}}>{key}:</h5><p style={{display:"inline"}}>{posts[key]}</p></div>
            )
          })}
      </div>
    </div></div>)}
    else{
      return <h1 id="nrts"></h1>
    }
    })}
    </div>
 

  </div>
  
</section>

    </div>
  
  );
}

export default App;
