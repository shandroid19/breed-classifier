import {useState,React, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import dogs from '../data.json'
import loadingsym from './gears.svg'


function Card({it}){
  AOS.init({
    duration : 1000,

  })
  const [filedata,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [identifying,setIdentifying] = useState(false)
  const [output,setOutput] = useState(it)
  const [okay,setokay]=useState(false)
  const [loaded,setloaded] = useState(false)
  // const fi = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9kpVS9Vb1r9HWVi6OHdB8Jtw1yoiOlrnCA&usqp=CAU'
  const [image,setImage] = useState(it.image)

  // const [image,setImage] = useState("https://res.cloudinary.com/shandroid/image/upload/v1619272742/breedy/kk5qlcdk0ilbt8dyhpev.jpg")
  useEffect(()=>{
    setOutput(it);
  },[it])
  
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
          setIdentifying(true)
          const res = await fetch("https://api.cloudinary.com/v1_1/shandroid/image/upload",
          {
              method: 'POST',
              body:data
          })
          const file = await res.json()
          setokay(true)
          setData(file);
          setImage(file.secure_url)
  
          const fi = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9kpVS9Vb1r9HWVi6OHdB8Jtw1yoiOlrnCA&usqp=CAU'

          setIdentifying(true)

          const respo = await fetch("https://breedinator-flask.herokuapp.com/",
          // const respo = await fetch("http://127.0.0.1:5000/",
          // const respo = await fetch("https://breed-classifier.herokuapp.com/img",
          {
              method: 'POST',
              body:JSON.stringify({img_link:file.secure_url})
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
            alert('Server is down, please try again after a few minutes.');
            // setImage(output.image)
            
          }
          setLoading(false)
          setIdentifying(false) 

      }
      console.log(output)
return(
<>
<div className='card dogcard pb-1 pb-md-3'>
              <div className='card-header'>
               <h3 id='identify' className='text-light text-center mt-3'>Click on the image to upload</h3>
              </div>
              <div className='card-body py-5 pb-5 m-0'>
              <div className='d-flex justify-content-center'> {loading?(<div className='container'><div className='row'><img src={loadingsym} className="col-12"></img></div><div className='row d-flex justify-content-center'><p className='text-light'>Identifying...This may take a few seconds.</p></div></div>):
              (<div  style={{width:'100%',padding:0,position:'relative'}}>
                <label htmlFor="dogupload" className='d-flex justify-content-center' >
              <img className="cardimg" src={output.image}/>
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
{/* <div className='card datacard'>
              <div className='card-body p-5 m-0'>
                <label className='d-flex justify-content-center' >
              <img className="cardimg" src={it.image}/>
              </label>
  

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
  </div> */}




</>
)
}
 export default Card;