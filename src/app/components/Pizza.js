"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import PizzaDetails from "./PizzaDetails";
import { FiX } from "react-icons/fi";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="group py-2  px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        onClick={() => setModal(true)}
        className="lg:group-hover:translate-y-3 xl:lg:group-hover:translate-y-3 md:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
        alt=""
      />
      <div onClick={() => setModal(true)}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="text-sm font-medium min-h-[60px] mb-6 ">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-xl font-semibold">
          starts at {pizza.priceSm}
        </div>
        <button
          onClick={() => setModal(true)}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        <button
          onClick={() => setModal(true)}
          className="btn btn-sm gradient lg:hidden px-3 text-sm"
        >
          starts at {pizza.priceSm}
        </button>
      </div>
      {modal && (
        <Modal
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%]      lg:translate-y-[-50%] outline-none"
          isOpen={modal} 
          style={modalStyles}
          onRequestClose={() => setModal(false)}
          contentLabel="Pizza Modal"
        >
          <div onClick={()=>setModal(false)} className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"><FiX className="text-4xl text-orange"></FiX></div>
        <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}></PizzaDetails>
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
