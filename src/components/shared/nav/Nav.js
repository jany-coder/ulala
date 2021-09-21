import React from 'react';
import './_nav.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/ulala.png';
import './_nav.scss';

const nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbarBg fixed">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" className="brandLogo d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                     aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link to="/" class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>HOME</span></Link>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link to="/" class="dropdown-item">Main Home</Link></li>
                                    <li><Link to="/" class="dropdown-item">Live TV</Link></li>
                                    <li><Link to="/" class="dropdown-item">Movies</Link></li>
                                    <li><Link to="/" class="dropdown-item">Drama</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/channel/all" class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>LIVE TV</span></Link>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link to="/channel/all" class="dropdown-item">All Channels</Link></li>
                                    <li><Link to="/" class="dropdown-item">Channel 2</Link></li>
                                    <li><Link to="/" class="dropdown-item">Channel 3</Link></li>
                                    <li><Link to="/" class="dropdown-item">Channel 4</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/movies" class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>MOVIES</span></Link>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link to="/" class="dropdown-item">All Movies</Link></li>
                                    <li><Link to="/" class="dropdown-item">Movies 2</Link></li>
                                    <li><Link to="/" class="dropdown-item">MOvies 3</Link></li>
                                    <li><Link to="/" class="dropdown-item">MOvies 4</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/drama" class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>DRAMA</span></Link>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link to="/drama/all" class="dropdown-item">Drama All</Link></li>
                                    <li><Link to="/" class="dropdown-item">Drama 2</Link></li>
                                    <li><Link to="/" class="dropdown-item">Drama 3</Link></li>
                                    <li><Link to="/" class="dropdown-item">Drama 4</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/drama" class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>POPULAR</span></Link>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link to="/popular" class="dropdown-item">Popular</Link></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-2">
                            <li className="nav-item">
                                <Link to="/user_dashboard"><button type="button" className="btn btn-primary">Login</button></Link>
                                <Link to="/admin_dashboard"><button type="button" className="btn btn-primary">Admin</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default nav;