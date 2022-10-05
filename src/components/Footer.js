import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-scroll';


function footer()
{

    return(<React.Fragment>
        <footer className="jumotron bg-dark text-light" id='contacts' >
        <div className = "container">
        <div className='row align-items-center'>
        <div className='col-7 p-3 '>
            <div className='row'>
            <div className="col-6 ">
            <h5 className='nav-link'>Links</h5>
                <Link className='nav-link' to='search' spy={true} smooth={true}>
                   <h4> Search for breed </h4>
                </Link>

                <Link className='nav-link' to='instructions' spy={true} smooth={true}>
                   <h4> Instructions </h4>
                </Link>

               <Link className='nav-link' to='identify' spy={true} smooth={true}>
                   <h4> Identify breed </h4>
                </Link>
            </div>
            <div className="col-6">
            <h5 className='nav-link'>Contact</h5>

            <h4 className='nav-link'>Phone: <a href="tel:+919535056068">+91 95350 6068</a></h4>
            <h4 className='nav-link'>Email: <a href="mailto:shanthanucn@gmail.com">shanthanucn@gmail.com</a></h4>
            </div>
            </div>
        </div>
            <div className="col-5 p-3">
                <img style={{opacity:"0.6"}} className="col-12"src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg"></img>
            </div>
        </div>
        {/* <p className = "ml-5 my-0 "style={{color:"floral-white"}}>Developed by Shanthanu Nagesh</p> */}

        </div>
        </footer>
    </React.Fragment>)
}

export default footer;