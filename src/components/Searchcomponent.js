
import React,{useState} from "react";
import ReactDOM from "react-dom";
import dogs from '../data.json'
import Card from './Card'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import german from './german.jpg';




function Search(){
  AOS.init({
    duration : 1000,

  })
  const obj = []

  const [dog,setdog] = useState({name:"German Shepherd",height:"23-25",weight:"40-50", life:"12-13",image:german})
  const [disp, display] = useState(false)
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    display(false)
    setSearchTerm(event.target.value);
    };

  const results = dogs.filter(dog =>
      dog.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      
 );
return (
  <div className='card d-flex justify-content-center px-md-5 p-3 rounded-0 searchcard' >
    <h5 id ="search" className='text-center text-light' >Recognisable Breeds </h5>
  <div className='row d-flex justify-content-center p-md-5 p-2 pb-3'>
<div className="col-md-8 d-flex justify-content-center">

      
<div className="col-md-10 col-lg-6">
      <form className="d-flex justify-content-center">
        <input className="form-control datacard"  value={searchTerm} onChange={handleChange} type="search" placeholder="Search for recognisable breeds" aria-label="Search"/>
      </form>
      </div>

      </div>
      </div>

  <div className='row d-flex justify-content-center'>
<div className = 'col-md-5 col-10 order-2 order-md-1' id='card'>
<Card it={dog}/>
</div>
<div data-aos="zoom-in" className="col-md-7 order-1 order-md-2">

<ul className="list-unstyled " style={{overflowY:'scroll',overflowX:'hidden',height:'40rem'}} >
  <div className="row my-5 d-flex justify-content-center">
    
    {results.length?results.map((item,index) => (
  <li style={{display:"inline-block"}} className= "col-3 card p-0 m-2 datacard"  key={index}>
    <Link  to="card"  spy={true} smooth={true}>
    <button  className='btn  mt-2 p-1 col-12' onClick={()=>{setdog(item);}}>
    <h4>{(item.name).replaceAll('_',' ')}</h4>

    </button>
    </Link>
    </li>

)):<h4 className="text-light">No match found</h4>}

</div>
</ul>

</div>
</div>
</div>

)}
export default Search;