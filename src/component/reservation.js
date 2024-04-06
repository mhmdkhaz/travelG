import React from "react";
import styled from "styled-components";

function reservation() {
  return (
    <section className="relative mt-48" style={{ backgroundColor: "#e4f0fe" }}>
      <div className="container px-8 mx-auto">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 justify-end items-center">
          {/*  */}
          <div className=" col-span-2 mt-10">
            <h2
              class="text-5xl leading-normal font-semibold text-center md:text-right"
              style={{ color: "#196dfb" }}
            >
              احجز رحلات الطيران في أي وقت وفي أي مكان بسهولة مع تطبيقنا القابل
              للتنزيل
            </h2>
            <div className="flex justify-end gap-4 mt-2">
              <div className="w-64 h-16">
                <img
                  src={`${process.env.PUBLIC_URL}/image/reservation/apple_store.webp`}
                />
              </div>
              <div className="w-64 h-16">
                <img
                  src={`${process.env.PUBLIC_URL}/image/reservation/google_play.webp`}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="relative flex justify-end">
            <Figure className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/image/reservation/landingPhone.svg`}
              />
            </Figure>
          </div>
        </div>
      </div>
      <div class="pb-24"></div>
      <div class="pb-24"></div>
      <div class="md:pb-24 pb-0"></div>
    </section>
  );
}

export default reservation;

const Figure = styled.figure`
  position: absolute;
  font-size: 24em;
  width: 1em;
  height: 1.5em;
  transform: translateY(-50%);
  max-width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    position: relative;
    height: 1.1em;
    font-size: 14em; /* Adjust font size for smaller screens */
  }
`;
