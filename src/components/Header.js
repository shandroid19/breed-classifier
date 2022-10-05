// // import React,{useState, Component} from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import {Link} from 'react-scroll'

// // import logo from './266770.jpg'

// // class Header extends React.Component{
// //     constructor(props)
// //     {
// //         super(props)
// //         this.state={
// //             count:0
// //         }
// //     }

// //     render(){
// //         return (<React.Fragment>

// //   <nav className="navbar navbar-expand navbar-dark bg-transparent"style={{position:"absolute"}}>
// //   <div className="container pt-5 pb-5 " >
// //     {/* <a className="navbar-brand" href="#"><img style={{height:"100px",width:"100px"}} src='https://www.logolynx.com/images/logolynx/13/13ffbe0991983910cb22d5878aace0f0.jpeg'></img></a> */}
// //     <a className="navbar-brand ml-auto" href="./"><h5>Breedinator</h5></a> 
// //    {/* <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button> */}
// //     {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
// //       <ul className="navbar-nav ml-3 ">
// //         <li className="nav-item">
// //           <Link className="nav-link p-2" to="search" spy={true} smooth={true}><h4>Search</h4></Link>
// //         </li>
// //         <li className="nav-item">
// //         <Link className="nav-link p-2" to="identify" spy={true} smooth={true}><h4>Identify</h4></Link>
// //         </li>
// //         <li className="nav-item">
// //         <Link className="nav-link p-2" to="instructions" spy={true} smooth={true}><h4>Instructions</h4></Link>
// //         </li>
// //       </ul>
// //     {/* </div> */}
// //   </div>
// // </nav>
// //   <img className="vw-100" style={{objectFit:"cover"}} src={logo}/>
// //         </React.Fragment>)
// //     }


// // }

// // export default Header;
// import React,{useState, Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-scroll'

// import logo from './266770.jpg'

// class Header extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             count:0
//         }
//     }

//     render(){
//         return (<React.Fragment>
      
//   <nav className="navbar navbar-expand navbar-light bg-transparent"style={{position:"absolute",zIndex:'1'}}>
//   <div className="container pt-5 pb-5 " >
//     {/* <a className="navbar-brand" href="#"><img style={{height:"100px",width:"100px"}} src='https://www.logolynx.com/images/logolynx/13/13ffbe0991983910cb22d5878aace0f0.jpeg'></img></a> */}
//     <a className="navbar-brand mr-auto" href="./" style={{color:'white'}}><h5>Breedinator</h5></a> 
//    {/* <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button> */}
//     {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
//       <ul className="navbar-nav ml-3 ">
//         <li className="nav-item">
//           <Link className="nav-link p-2" to="search" spy={true} smooth={true}><h4>Search</h4></Link>
//         </li>
//         <li className="nav-item">
//         <Link className="nav-link p-2" to="identify" spy={true} smooth={true}><h4>Identify</h4></Link>
//         </li>
//         <li className="nav-item">
//         <Link className="nav-link p-2" to="instructions" spy={true} smooth={true}><h4>Instructions</h4></Link>
//         </li>
//       </ul>
//     {/* </div> */}
//   </div>
// </nav>
//   <img className="vw-100 col-12 p-0 m-0" style={{objectFit:"cover"}} src="https://images.wagwalkingweb.com/media/daily_wag/behavior_guides/hero/1537502336.95/why-do-dogs-try-to-cover-up-their-poop.jpg"/>
//         </React.Fragment>)
//     }


// }

// export default Header;
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import loadingsym from './load.gif';
import '../App.css'
import dogs from '../data.json'
import Search from './Searchcomponent'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import back from './back.jpg';

function Foot()
{
    AOS.init({
      duration : 1000,

    })
    const [selectedFile, setSelectedFile] = useState(null);
    const [filedata,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [identifying,setIdentifying] = useState(false)
    const [output,setOutput] = useState({name:"German Shepherd", height:"22-26", weight:"50-90", life:"12-14"})
    const [okay,setokay]=useState(false)
    const [loaded,setloaded] = useState(false)
    const fi = 'https://www.thesprucepets.com/thmb/GCW6RWhPKO54A2ZRLssk20KyOwM=/1380x1035/smart/filters:no_upscale()/14720675265_830d848168_o-c272a4a726824ae8ae9b3da1c4b5c225.jpg'

    const [image,setImage] = useState("https://res.cloudinary.com/shandroid/image/upload/v1619951101/breedy/qige1qmrundnwtrht2jt.jpg")

    const uploadImage = async e=> {
          
            const files = e.target.files
            const data = new FormData()
            data.append('file',files[0])
            data.append('upload_preset','breedy')
            let filname=files[0].name.toLowerCase();
            if(!(filname.endsWith('.jpg')||filname.endsWith('.png')||filname.endsWith('.jpeg')))
              {
                alert("Only '.png' , '.jpg' and '.jpeg' formats supported!");
                return;
              }
              setLoading(true)
              

            const res = await fetch("https://api.cloudinary.com/v1_1/shandroid/image/upload",
            {
                method: 'POST',
                body:data
            })
            const file = await res.json()
            setokay(true)
            setData(file);
            console.log(filedata)
            setImage(file.secure_url)
    
            // const fi = 'https://www.thesprucepets.com/thmb/GCW6RWhPKO54A2ZRLssk20KyOwM=/1380x1035/smart/filters:no_upscale()/14720675265_830d848168_o-c272a4a726824ae8ae9b3da1c4b5c225.jpg'
            setLoading(false)
            setloaded(true)
        }
        const identify= async ()=>{
        setIdentifying(true)

        // const respo = await fetch("http://127.0.0.1:8000/img",
        const respo = await fetch("https://breed-classifier.herokuapp.com/img",
        {
            method: 'POST',
            body:JSON.stringify({img_link:filedata.secure_url})
            // body:JSON.stringify({img_link:fi})
        }).then((response)=>{return response},rejection=>{return rejection})
        if(respo.status==200)
        {
        const out = await respo.json();
        const results = dogs.filter(dog =>{
          return dog.name.replaceAll('-','_')==(out[0].breed).toLowerCase()})
        setOutput(results[0])
        setloaded(false)
        }
        else{
          // console.error(respo)
          alert('Server was down, please try again after 5 seconds');
        }
        setIdentifying(false) 
    }
    // backgroundImage:`url(${back})`
    //https://thumbs.dreamstime.com/b/dog-paws-seamless-background-brown-paw-prints-wallpaper-tile-96804137.jpg

    return(<React.Fragment>
        <div className='justify-content-center' >
        
        <div  data-aos="fade-right" className=" p-md-5 rounded card" style={{backgroundImage: "linear-gradient(#3193e8,#9ed2ff)"}}>
        {/* style={{backgroundColor:"#1a0e01"}} */} 
          <div id = "instructions"className="card p-5 justify-content-center" style={{backgroundImage: "linear-gradient(to right, #fff187, #82d999)", color:"black"}}>
              <h5 className='p-md-3'> Instructions and conditions</h5>
              <ul>
              <li><h4> In the <Link style={{color:"skyblue"}} to="identify" spy={true} smooth={true}>Identification section</Link>, upload the image of the dog to be identified. </h4></li>
              <li><h4> If the file is not being uploaded (happens on mobile browsers), switch to Google Chrome browser.</h4></li>
              <li><h4> The presence of other animals or dogs of different breed may lower the accuracy. </h4></li>
              <li><h4> The image must be clear and centered towards the subject. </h4></li>
              <li><h4> It can identify 120 basic breeds of dogs with 85% accuracy (working on it). </h4></li>
              <li><h4> If the subject is not among the recognisable breeds, the breed with the highest feature resemblance will be shown in the results.</h4></li>
              </ul>
          </div>
          </div>
          <div >
        <div className= "p-md-5 d-flex justify-content-center">

        <div id = "identify" data-aos="zoom-in" data-aos-mirror="false" className=" p-md-5 col-md-9 rounded card " style={{backgroundColor:"#1a0e01"}} >
          
        <div className=' d-flex justify-content-center align-items-center media-body'>

            <div className=" p-3">
              
                {/* <input type="file" name="file" placeholder="upload an image" onChange={uploadImage}></input> */}
               <h5 style={{color:"floralwhite"}}>Upload an image of the dog to identify it's breed</h5>
               <div className="App">
              <input
              className = 'btn btn-secondary m-2'
          type="file"
          value={selectedFile}
          onClick={()=>{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                      
          alert("If you are not able to upload the image, please switch to Google Chrome browser.");}}}
          onChange={uploadImage}
               />
            </div>
                
                {/* <div className="input-group my-3">
                
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={uploadImage} aria-describedby="inputGroupFileAddon01"/>
                  <label className="custom-file-label" for="inputGroupFile01" style={{backgroundColor:"#b9f0b6"}}>Upload</label>
                </div>
              </div> */}
              <div className='row mt-2 pt-3 rounded'>
                <div className='d-flex justify-content-center col-md-6'> 
                <div className='row'>
                {loading?(<img src={loadingsym} className="col-md-12"></img>):(<img className="rounded col-md-12" src={image}/>)}
                                   <div className='d-flex justify-content-center col-12'>

                {identifying?(<div ><img src={loadingsym} className="col-12"></img></div> ):(<button disabled={!loaded} className="btn btn-lg btn-success m-3 col-12" onClick={identify}> 
                        <h4>Identify</h4> 
                    </button>)}
                     </div>
                    </div>
                   </div>

                   
              <div className="col-md-6 p-lg-5 justify-content-center align-items-center d-flex" >
                    {(!loaded)&&(!identifying)&&(<div>
<table className="table table-borderless table-responsive">
  <tbody className="col-12">
    <tr>
      <th>Breed</th>
      <td>{(output.name).replaceAll('_',' ')}</td>
    </tr>
    <tr>
      <th>Height</th>
      <td>{output.height} inches</td>
    </tr>
    <tr>
      <th>Weight</th>
      <td>{output.weight} pounds</td>
    </tr>
    <tr>
      <th>Life expectancy</th>
      <td>{output.life} years </td>
    </tr>
  </tbody>
</table>
                    </div>)}
                </div> 


                </div>
                </div>
            </div>

            </div>
            </div>
            </div>
        
            <div>

            {/* <Search/> */}

            </div>
            

            </div>
    </React.Fragment>)
}



export default Foot;

