import React, { useState } from "react";
import styled from "styled-components";
import Input from "./input";
import Date from "./date";
import Passenger from "./passenger";
import ClassFly from "./classFly";
import { NavLink } from "react-router-dom";

function Header() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (btn) => {
    setActiveButton(btn);
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#e4f0fe" }}>
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <DivImg className="relative col-span-12 md:col-span-8">
            <img
              src={`${process.env.PUBLIC_URL}/image/airplane.webp`}
              className="h-full w-full object-cover"
            />
          </DivImg>
          {/*  */}
          <form className="col-span-12 md:col-span-4">
            <div className="flex justify-center p-1 reduce-9 bg-white my-1 rounded-full">
              <Btn
                type="button"
                className={`btn-white btn grow-1 reduce-9 py-2 px-2 ${
                  activeButton === "btn1" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("btn1")}
              >
                ذهاب فقط
              </Btn>
              <Btn
                type="button"
                className={`btn grow-1 reduce-9 py-2 px-2 ${
                  activeButton === "btn2" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("btn2")}
              >
                ذهاب وعودة
              </Btn>
            </div>
            {/* input */}
            <Input />
            {/* start in date leave */}
            <Date />
            {/* start in Passenger */}
            <Passenger />
            {/* start in ClassFly */}
            <ClassFly />
            {/* button */}
            <div
              class="btn w-full mt-5 py-2 text-white text-xl text-center"
              style={{ backgroundColor: "#196dfb" }}
            >
              <span data-i18n="offers.searchflight">
                <NavLink to="/result">ابحث عن رحلة</NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Header;

const DivImg = styled.div`
  height: calc(100vh - 90px - 4em);
`;

const Btn = styled.button`
  font-family: inherit;
  border: 0;
  outline: 0;
  font-size: 1em;
  font-weight: 400;
  padding: 0.5em 1em;
  cursor: pointer;
  background-color: var(--primary-color);
  color: #196dfb;
  transition: 0.1s;

  &.active {
    background-color: #196dfb;
    color: white;
    border-radius: 9rem;
  }
`;
