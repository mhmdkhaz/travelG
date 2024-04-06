import styled, { keyframes } from "styled-components";
import { useState } from "react";

function ModalChoose({ isOpen, onClose, selectedTravelInfo }) {
  const closeModal = () => {
    onClose(); // Call the onClose function passed from props
  };

  const calculateDuration = () => {
    const departureTime = new Date(
      selectedTravelInfo?.itineraries[0]?.segments[0]?.departure?.at
    );
    const arrivalTime = new Date(
      selectedTravelInfo?.itineraries[0]?.segments[0]?.arrival?.at
    );
    const duration = arrivalTime - departureTime;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  return (
    <ModalBackground isOpen={isOpen}>
      <ModalContent isOpen={isOpen} className="relative  md:w-2/4 w-11/12">
        <div className="grid grid-cols-3 gap-4 justify-center ">
          <div>
            <Title className="font-semibold">
              {
                selectedTravelInfo?.itineraries[0]?.segments[0]?.departure
                  ?.iataCode
              }
            </Title>
            <p style={{ color: "#196df5" }} className="my-1">
              {new Date(
                selectedTravelInfo?.itineraries[0]?.segments[0]?.departure?.at
              ).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
            <p>
              {selectedTravelInfo?.itineraries[0]?.segments[0]?.departure?.at.slice(
                0,
                10
              )}
            </p>
          </div>
          <div>
            <DivImg
              className="flight-image i-ek "
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/result/airlines-logo-50px.svg)`,
              }}
            ></DivImg>
            <h1 className="text-xl">{calculateDuration()}</h1>
          </div>
          <div>
            <Title className="font-semibold">
              {
                selectedTravelInfo?.itineraries[0]?.segments[0]?.arrival
                  ?.iataCode
              }
            </Title>
            <p style={{ color: "#196df5" }} className="my-1">
              {new Date(
                selectedTravelInfo?.itineraries[0]?.segments[0]?.arrival?.at
              ).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
            <p>
              {selectedTravelInfo?.itineraries[0]?.segments[0]?.arrival?.at.slice(
                0,
                10
              )}
            </p>
          </div>
          <p
            onClick={closeModal}
            className="absolute right-4 top-2 text-2xl cursor-pointer"
          >
            x
          </p>
        </div>
        <div className="flex justify-between gap-4 mt-5">
          <Button className=" py-2 mt-2 px-4 w-40">اختيار</Button>
          <div className="flex items-center gpa-4">
            <h1 style={{ color: "#1f9ea5" }} className="text-2xl font-semibold">
              {selectedTravelInfo?.price?.total}
            </h1>
            <Status
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/result/seats-status.svg)`,
              }}
            ></Status>
          </div>
        </div>
      </ModalContent>
    </ModalBackground>
  );
}

export default ModalChoose;

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50%);
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  animation: ${(props) => (props.isOpen ? slideInAnimation : slideOutAnimation)}
    0.5s ease forwards;
`;

const Title = styled.h2`
  color: #1a1f71;
  font-size: 24px;
`;

const DivImg = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-position: -800px 0;
  outline: none;
`;

const Button = styled.button`
  background-color: #196dfb;
  border: 0;
  color: #fff;
  outline: 0;
  box-shadow: none;
`;

const Status = styled.div`
  display: inline-block;
  width: 50px;
  height: 34px;
  background-position: 0 0;
`;
