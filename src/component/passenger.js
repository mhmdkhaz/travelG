import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useInputContext } from "../context/context";

function Passenger() {
  const {
    adultCount,
    setAdultCount,
    kidCount,
    setKidCount,
    infantCount,
    setInfantCount,
  } = useInputContext();

  const handleIncrement = (type) => {
    switch (type) {
      case "adult":
        setAdultCount(adultCount + 1);
        break;
      case "kid":
        setKidCount(kidCount + 1);
        break;
      case "infant":
        setInfantCount(infantCount + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "adult":
        setAdultCount(adultCount > 0 ? adultCount - 1 : 0);
        break;
      case "kid":
        setKidCount(kidCount > 0 ? kidCount - 1 : 0);
        break;
      case "infant":
        setInfantCount(infantCount > 0 ? infantCount - 1 : 0);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-3 gap-2 pax-container">
        {/* Infant Section */}
        <div className="pax-count bg-white text-center py-2">
          <p style={{ color: "#196dfb" }}>رضيع</p>
          <div className="pax-control relative">
            <Input
              className="py-3 px-2 form-control number-only no-backspace adult pax-value"
              value={infantCount}
              disabled=""
            />
            <SpanUp onClick={() => handleIncrement("infant")}>
              <FontAwesomeIcon icon={faChevronUp} />
            </SpanUp>
            <SpanDown onClick={() => handleDecrement("infant")}>
              <FontAwesomeIcon icon={faChevronDown} />
            </SpanDown>
          </div>
        </div>

        {/* Kid Section */}
        <div className="pax-count bg-white text-center py-2">
          <p style={{ color: "#196dfb" }}>طفل</p>
          <div className="pax-control relative">
            <Input
              className="py-3 px-2 form-control number-only no-backspace adult pax-value"
              value={kidCount}
              disabled=""
            />
            <SpanUp onClick={() => handleIncrement("kid")}>
              <FontAwesomeIcon icon={faChevronUp} />
            </SpanUp>
            <SpanDown onClick={() => handleDecrement("kid")}>
              <FontAwesomeIcon icon={faChevronDown} />
            </SpanDown>
          </div>
        </div>

        {/* Adult Section */}
        <div className="pax-count bg-white text-center py-2">
          <p style={{ color: "#196dfb" }}>بالغ</p>
          <div className="pax-control relative">
            <Input
              className="py-3 px-2 form-control number-only no-backspace adult pax-value"
              value={adultCount}
              disabled=""
            />
            <SpanUp onClick={() => handleIncrement("adult")}>
              <FontAwesomeIcon icon={faChevronUp} />
            </SpanUp>
            <SpanDown onClick={() => handleDecrement("adult")}>
              <FontAwesomeIcon icon={faChevronDown} />
            </SpanDown>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Passenger;

const Container = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  text-align: center;
  outline: none;
`;

const SpanUp = styled.span`
  color: #c9538b;
  top: -2px;
  right: 0;
  text-align: center;
  z-index: 1;
  width: 25px;
  cursor: pointer;
  position: absolute;
  right: 10%;
`;

const SpanDown = styled.span`
  color: #c9538b;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  width: 25px;
  cursor: pointer;
  position: absolute;
  right: 10%;
`;
