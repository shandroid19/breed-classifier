// import React,{useState} from "react";
// import ReactDOM from "react-dom";
// import dogs from '../data.json'
// import Card from './Card'
// import {Link} from 'react-scroll'
// import AOS from 'aos';
// import 'aos/dist/aos.css';



// function Search(){
//   AOS.init({
//     duration : 1000,

//   })
//   const obj = []

//   const [dog,setdog] = useState({name:"German Shepherd",height:"23-25",weight:"40-50", life:"12-13",image:"german.jpg"})
//   const [disp, display] = useState(false)
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const handleChange = event => {
//     display(false)
//     setSearchTerm(event.target.value);
//     };

//   const results = dogs.filter(dog =>
//       dog.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      
//  );
// return (
//   <div className='card col-md-11 d-flex justify-content-center p-md-5 m-md-5' style={{backgroundColor:"#6b3e0e"}}>
//     <h5 id = "search" className='p-2 ml-5' style={{color:"white"}}>Recognisable Breeds </h5>
//   <div className='row d-flex justify-content-center p-md-5'>
// <div className="col-md-6 d-flex justify-content-center">

      

//       <form className="d-flex justify-content-center">
//         <div class='form-control col-3 borderless' style={{color:"white", backgroundColor:"#6b3e0e"}}><th>Filter</th></div>
//         <input class="form-control " value={searchTerm} onChange={handleChange} type="search" placeholder="Search for breed" aria-label="Search"/>
//         {/* <button class="btn btn-success" type="submit">Search</button> */}
//       </form>

//       </div>
//       </div>

// <div className ="container" style={{backgroundColor:"#6b3e0e"}}>
//   <div className='row'>
// <div className = 'col-md-4' id='card'>
// {disp?(<Card it={dog} />):(<></>)}
// </div>
// <div data-aos="zoom-in" className={disp? "col-md-8" : "col-12"}>
//   {
// !searchTerm? (

// <ul className="list-unstyled">
//   <div>
// {dogs.map((item,index) => (
//   <li style={{display:"inline-block"}} className={disp? "col-4" : "col-3"} key={index}>
//     <Link  to="card" spy={true} smooth={true}>
//     <button className='btn btn-dark my-md-1 mx-auto p-1 col-12' onClick={()=>{setdog(item); display(true);}}>
//     <h6>{(item.name).replaceAll('_',' ')}</h6>

//     </button>
//     </Link>
//     </li>

// ))}
// </div>
// </ul>):(
// <ul className="list-unstyled" >
//   <div>
// {results.map((item,index) => (
//   <li style={{display:"inline-block"}} className={disp? "col-4" : "col-3"} key={index}>
//     <Link  to="card"  spy={true} smooth={true}>
//     <button  className='btn btn-dark mt-2 p-1 col-12' onClick={()=>{setdog(item); display(true)}}>
//     <h6>{(item.name).replaceAll('_',' ')}</h6>

//     </button>
//     </Link>
//     </li>

// ))}
// </div>
// </ul>
// )}
// </div>
// </div>
// </div>
// </div>

// )}
// export default Search;
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
    <h5 id ="search" className='p-2' >Recognisable Breeds </h5>
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
<div className = 'col-md-5 col-10' id='card'>
<Card it={dog}/>
</div>
<div data-aos="zoom-in" className="col-md-7">

<ul className="list-unstyled " style={{overflowY:'scroll',overflowX:'hidden',height:'40rem'}} >
  <div className="row my-5 d-flex justify-content-center">
{results.map((item,index) => (
  <li style={{display:"inline-block"}} className= "col-3 card p-0 m-2 datacard"  key={index}>
    <Link  to="card"  spy={true} smooth={true}>
    <button  className='btn  mt-2 p-1 col-12' onClick={()=>{setdog(item);}}>
    <h4>{(item.name).replaceAll('_',' ')}</h4>

    </button>
    </Link>
    </li>

))}
</div>
</ul>

</div>
</div>
</div>

)}
export default Search;