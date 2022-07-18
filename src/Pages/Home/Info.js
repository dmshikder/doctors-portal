import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols- lg:grid-cols-3 gap-5 ">
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgClass="bg-gradient-to-r from-accent to-neutral"
        cardTitle="Our Locatins"
        img={marker}
      ></InfoCard>
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
