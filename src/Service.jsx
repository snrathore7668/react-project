import React from 'react'
import s1 from '../src/Images/s1.png';
import s2 from '../src/Images/s2.png';
import s3 from '../src/Images/s3.png';

const Service = () => {
  return (
        <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={s1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={s2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={s3} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={s3} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={s2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={s1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default Service;
