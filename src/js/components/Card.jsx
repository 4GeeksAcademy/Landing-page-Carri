import React from 'react';
import foto from '../../img/prueba.jpeg';

const Card = ({ title, text, imgUrl }) => {
    return (
        <div className="col mb-5">
          <div className="card h-100">
            <img className="card-img-top" src={foto} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{title}</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">Find Out More!</a>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Card;
