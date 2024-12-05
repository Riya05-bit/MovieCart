import React, { useState } from 'react';
import SearchMovie from './SearchMovie';
import { Link } from 'react-router-dom';
import './MovieCart.css';
const MovieCart = () => {
  const [search, setSearch] = useState("");
  
  const changeHandle = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  let localData = SearchMovie.filter((e) => {
    return e.name && e.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
        <Link to="/Moviecart">
      <nav className="navbar navbar-expand-lg navbar-dark p-2 border border-primary bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" style={{ width: 700 }} type="search" placeholder="Search movie here" aria-label="Search" onChange={changeHandle} />
          </form>
        </div>
      </nav>
      <br />
      <div className="movie-cards-container flex">
        {localData.map((e) => (
          <div key={e.name} className="movie-card section p-2">
            <div className="movie-image">
              <img src={e.image} alt={`${e.name} poster`} />
            </div>
            <div className="movie-details">
              <i className="txt">Movie name: {e.name} &nbsp;&nbsp;</i><br />
              <i className="txt">Actor name: {e.actor} &nbsp;&nbsp;</i><br />
              <i className="txt">Actress name: {e.actress} &nbsp;&nbsp;</i><br />
              <i className="txt">Duration: {e.duration} &nbsp;&nbsp;</i><br />
              <i className="txt">Genre: {e.genre} &nbsp;&nbsp;&nbsp;&nbsp;</i>
            </div>
          </div>
        ))}
      </div>
    </Link>
    </>
  );
}

export default MovieCart;
