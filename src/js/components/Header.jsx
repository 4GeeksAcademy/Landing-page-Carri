import React from 'react';

const Header = () => {
    return (
        <header className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <div className="my-5 text-center">
                  <h1 className="fw-bolder mb-2">A Warm Welcome!</h1>
                  <p className="lead fw-normal mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
                    incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
                  </p>
                  <a className="btn btn-primary btn-lg" href="#">Call to action!</a>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    };

export default Header;
