import React from 'react'
import web from '../src/Images/home.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1">
                  <h1>Grow your business with <strong className="brand-name">ShreeShyam</strong></h1>
                  <h2 className="my-3">We are the team of talented developer making website</h2>
                  <div className="mt-3 my-5">
                    <NavLink to="/Service" className="btn-get-started">Get Started</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img src={web} className="img-fluid animated" alt="..."></img>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
