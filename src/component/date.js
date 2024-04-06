import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useInputContext } from "../context/context";

function DateComponent() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const { setdepartureDate, setreturnDate } = useInputContext();
  const getArabicMonth = (date) => {
    const months = [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ];
    return months[date.getMonth()];
  };

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    setdepartureDate(date.toISOString().slice(0, 10));
    closeModal1(); // Optionally close the modal after selecting a date
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    setreturnDate(date.toISOString().slice(0, 10));
    closeModal2(); // Optionally close the modal after selecting a date
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4">
      <ModalTrigger onClick={openModal1}>
        <div className="flex justify-stretch items-center gap-2 my-1 text-right">
          {/* Return Date */}
          <div
            className="grow relative flex justify-end gap-2 items-end btn btn-white px-4 py-2 w-full md:w-2/4"
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Div>
              <Span>{getArabicMonth(selectedDate1)}</Span>
              <p>{selectedDate1.toLocaleDateString()}</p>
            </Div>
            <div>
              <p className="color-primary text-xl" style={{ color: "#196dfb" }}>
                تاريخ العودة
              </p>
              <DateNumber className="text-2xl text-center">
                {selectedDate1.getDate()}
              </DateNumber>
            </div>
          </div>
        </div>
      </ModalTrigger>

      {isModalOpen1 && (
        <ModalBackground onClick={closeModal1}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <DatePickerContainer>
              <DatePicker
                selected={selectedDate1}
                onChange={handleDateChange1}
                dateFormat="yyyy-MM-dd"
              />
            </DatePickerContainer>
            <CloseButton onClick={closeModal1}>Close</CloseButton>
          </ModalContent>
        </ModalBackground>
      )}

      <ModalTrigger onClick={openModal2}>
        <div className="flex justify-stretch items-center gap-2 my-1 text-right">
          {/* Departure Date */}
          <div
            className="grow relative flex justify-end gap-2 items-end btn btn-white px-4 py-2 w-2/4 bg-white"
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Div>
              <Span>{getArabicMonth(selectedDate2)}</Span>

              <p>{selectedDate2.toLocaleDateString()}</p>
            </Div>
            <div>
              <p className="color-primary text-xl" style={{ color: "#196dfb" }}>
                تاريخ المغادرة
              </p>
              <DateNumber className="text-2xl text-center">
                {selectedDate2.getDate()}
              </DateNumber>
            </div>
          </div>
        </div>
      </ModalTrigger>

      {isModalOpen2 && (
        <ModalBackground onClick={closeModal2}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <DatePickerContainer>
              <DatePicker
                selected={selectedDate2}
                onChange={handleDateChange2}
                dateFormat="yyyy-MM-dd"
              />
            </DatePickerContainer>
            <CloseButton onClick={closeModal2}>Close</CloseButton>
          </ModalContent>
        </ModalBackground>
      )}
    </div>
  );
}

export default DateComponent;

const DateNumber = styled.p`
  font-size: 40px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  color: #1a1f71;
`;

const Div = styled.div`
  margin: 5px 20px;
  line-height: 30px;
  display: inline-block;
  vertical-align: middle;
`;

const Span = styled.span`
  line-height: 20px;
  display: block;
  font-size: 15px;
  text-align: center;
  color: #1a1f71;
`;

const ModalTrigger = styled.div`
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const DatePickerContainer = styled.div`
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #ff5f5f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
