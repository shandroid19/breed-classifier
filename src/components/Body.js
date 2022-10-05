import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import loadingsym from './load.gif';
import loadingsym from './gears.svg'
import '../App.css'
import dogs from '../data.json'
import Search from './Searchcomponent'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import german from './german.jpg';

function Foot()
{
    AOS.init({
      duration : 1000,

    })

    // const fi = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9kpVS9Vb1r9HWVi6OHdB8Jtw1yoiOlrnCA&usqp=CAU'

    
  
  
    
    return(<React.Fragment>
        {/* <div id='instructions' className='justify-content-center m-0' > */}
        <div id='instructionsection' className='w-100'>
          <div className='container m-4'>
        {/* <div className='jumbotron instructioncard m-0 rounded-0'> */}
          <div className='row'>
              <h5 className='text-center'> Instructions </h5>
              <ul>
              <li><h4> In the <Link to="identify" spy={true} smooth={true}>Identification section</Link>, upload the image of the dog to be identified. </h4></li>
              <li><h4> The presence of other animals or dogs of different breed may lower the accuracy. </h4></li>
              <li><h4> The image must be clear and centered towards the subject. </h4></li>
              <li><h4> It can identify 120 basic breeds of dogs with 85% accuracy. </h4></li>
              <li><h4> If the subject is not among the recognisable breeds, the breed with the highest feature resemblance will be shown in the results.</h4></li>
              </ul>
              </div>
              </div>
          {/* </div> */}
          
        </div>
        {/* <div className=' d-flex p-5 row  card-bg m-0'>
          <div className='col-md-5 ml-md-5'>
              
              <div className='card dogcard pb-1 pb-md-3'>
              <div className='card-header mb-0'>
               <h3 id='identify' className='text-light'>Click on the image to upload</h3>
              </div>
              <div className='card-body py-5 pb-5 m-0'>
              <div className='d-flex justify-content-center'> {loading?(<div className='container'><div className='row'><img src={loadingsym} className="col-12"></img></div><div className='row d-flex justify-content-center'><p className='text-light'>Identifying...This may take a few seconds.</p></div></div>):
              (<div  style={{width:'100%',padding:0,position:'relative'}}>
                <label htmlFor="dogupload" className='d-flex justify-content-center' >
              <img className="cardimg" src={image}/>
              </label>
              <input style={{position:'absolute'}}  type="file" className="custom-file-input" id="dogupload" onChange={uploadImage} aria-describedby="inputGroupFileAddon01"/>
              </div>)}
                   </div>
              {(!loaded)&&(!identifying)&&(<div>
<table className="table table-borderless">
  <tbody className="col-12" style={{color:"floralwhite"}}>
    <tr>
      <th>Breed</th>
      <th>{(output.name).replace('_',' ')}</th>
    </tr>
    <tr>
      <th>Height</th>
      <th>{output.height} inches</th>
    </tr>
    <tr>
      <th>Weight</th>
      <th>{output.weight} pounds</th>
    </tr>
    <tr>
      <th>Life expectancy</th>
      <th>{output.life} years </th>
    </tr>
  </tbody>
</table>
                    </div>)}
                
              </div>
              </div>
              
            </div>
            </div> */}

      
  
            <Search/>           
            {/* </div> */}
    </React.Fragment>)
}



export default Foot;

