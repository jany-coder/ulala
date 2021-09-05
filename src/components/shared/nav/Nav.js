import React from 'react';
import logo from '../../../assets/ulala.png';

const nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt=""  height="40" class="d-inline-block align-text-top"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#live">Live TV</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#movies">Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#drama">Drama</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav ms-2">
                            <li class="nav-item">
                            <button type="button" class="btn btn-success">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default nav;