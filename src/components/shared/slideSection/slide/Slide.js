import React from 'react';
import { Link } from 'react-router-dom';

export default function Slide({ title, link, children }) {
    return (
        <section className="container-fluid my-3">
            <div>
                <h5 className="d-inline mx-3">{title}</h5>
                <Link to={link}>See More</Link>
            </div>
            {children}
        </section >
    );
};