import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-2 text-lg text-white">{title}</h1>
        <p className="mt-2 text-sm md:w-9/12 text-white">{subtitle}</p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 p-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
          title="Security Guarantee"
          subtitle="Security is guaranteed. we always maintain privacy and the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          icon={<BiSearchAlt fontSize={21} className="text-white"/>}
          title="Best exchange rates"
          subtitle="Security is guaranteed. we always maintain privacy and the quality of our products."
        />
        <ServiceCard
          color="bg-[#F84550]"
          icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
          title="Fastest transacition"
          subtitle="Security is guaranteed. we always maintain privacy and the quality of our products."
        />
      </div>
    </div>
  )
}

export default Services