/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "./Cards";

const Services = () => {
  return (
    <>
      <div className="heading text-center my-5">
        <h1>Our Serviecs</h1>
      </div>
      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5 gx-5">
              <Card title="bali" />
              <Card title="mumbai" />
              <Card title="usa" />
              <Card title="america" />
              <Card title="kerala" />
              <Card title="tamilnadu" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
