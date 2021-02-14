/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import pic from './img/gal-4.jpeg';

const Card = (props) => {
  return (
    <>
              <div className="col-md-4">
                <div class="card">
                  <img src={pic} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>      
    </>
  );
};

export default Card;
