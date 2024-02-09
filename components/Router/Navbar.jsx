import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
const [searchTerm,setsearchTerm] = useState("")
const navigate = useNavigate();
const submitHandler = (e) => {
  e.preventDefault();
  if(searchTerm!='')
  {

  navigate(`/products/search/${searchTerm}`);
  }
  

}
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="form-inline" onSubmit = {submitHandler}>
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setsearchTerm(e.target.value)} />
              <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Search</button>
            </form>
          </div>
        </div>

        {location.pathname !== '/Product' && (
          <div className="row mt-3">
            <div className="col-md-12">
              <Link to={'/'}>
                <a href="#" className="btn btn-primary active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link to={'/about'}>
                <a href="#" className="btn btn-primary active" aria-current="page">
                  About
                </a>
              </Link>
              <Link to={'/career'}>
                <a href="#" className="btn btn-primary active" aria-current="page">
                  Career
                </a>
              </Link>
              <Link to={'/products'}>
                <a href="#" className="btn btn-primary active" aria-current="page">
                  Product
                </a>
              </Link>
              <Link to={'/team'}>
                <a href="#" className="btn btn-primary active" aria-current="page">
                  Team
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
