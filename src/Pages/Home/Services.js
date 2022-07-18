import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Trearment",
      description: "ok banhlsjerfsd",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "ok banhlsjerfsd",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth whitening",
      description: "ok banhlsjerfsd",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          our services
        </h3>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
