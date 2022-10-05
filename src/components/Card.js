import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Card({it}){
  AOS.init({
    duration : 1000,

  })
return(
<React.Fragment>
<div className='card datacard'>
              <div className='card-body p-5 m-0'>
                <label className='d-flex justify-content-center' >
              <img className="cardimg" src={it.image}/>
              </label>
                   {/* </div> */}
                   
                   {/* {identifying?(<img src={loadingsym} className="col-12"></img> ):(<button disabled={!loaded} className="btn btn-lg btn-success m-3" onClick={identify}> 
                        <h4>Identify</h4> 
                    </button>)} */}

        <div className="d-flex justify-content-center">
 <table className="table table-borderless">
  <tbody className="col-12">
    <tr>
      <th>Breed</th>
      <td>{(it.name).replace('_',' ')}</td>
    </tr>
    <tr>
      <th>Height</th>
      <td>{it.height} inches</td>
    </tr>
    <tr>
      <th>Weight</th>
      <td>{it.weight} pounds</td>
    </tr>
    <tr>
      <th>Life expectancy</th>
      <td>{it.life} years </td>
    </tr>
  </tbody>
</table> 
                    </div>
                
              </div>
              {/* card-body ends here */}
  </div>
  {/* <div className='card p-md-2 p-1 pt-2 data-card' data-aos="fade-right">
    <img className="col-12 data-img"src={it.image}/> */}



</React.Fragment>
)
}
 export default Card;