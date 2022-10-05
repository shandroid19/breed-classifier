import {Link} from 'react-scroll'
export default function Top(){
    return(
  //   <nav style={{backgroundColor:'#81bcf7'}} className="navbar navbar-dark" >
  //   {/* <div className=" navbar-expand"> */}
  //     <div className="row display-inline" style={{width:'100%'}}>
  //       <div className="col-2">
  //       <a className="navbar-brand">Breedinator</a>
  //       </div>
  //       <div className="col-2">
  //       <a className="nav-link">Identify</a>
  //       </div>
  //       <div className="col-2">
  //       <a className="nav-link">breeds</a>
  //       </div>
  //       <div className="col-2">
  //       <a className="nav-link">contacts</a>
  //       </div>
  //     </div>

  // </nav>
  <nav style={{backgroundColor:'#81bcf7'}} className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Breedinator</a>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="identify" spy={true} smooth={true}>Identify</Link>
        </li>
        <li className="nav item">
          <Link className="nav-link" to="search" spy={true} smooth={true}>Breeds</Link>
        </li>
        <li className="nav item">
          <Link className="nav-link" to="contacts" spy={true} smooth={true}>Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}