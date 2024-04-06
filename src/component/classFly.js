import React, { useState } from "react";
import styled from "styled-components";
import { useInputContext } from "../context/context";

function ClassFly() {
  // State to manage the selected class
  const [selectedClass, setSelectedClass] = useState("E");
  const { travelClass, setTravelClass } = useInputContext();

  // Function to handle click on container and update selected class
  const handleContainerClick = (cabinClass) => {
    setSelectedClass(cabinClass);
    // Set the travel class based on the selected cabin class
    if (cabinClass === "E") {
      setTravelClass("ECONOMY");
    } else if (cabinClass === "B") {
      setTravelClass("BUSINESS");
    } else if (cabinClass === "F") {
      setTravelClass("FIRST");
    }
  };

  console.log(travelClass);

  return (
    <div>
      {/* Container for cabin options */}
      <div className="grid grid-cols-3 gap-2 mt-5 cabin-container">
        {/* Economy class option */}
        <Container
          isSelected={selectedClass === "E"}
          className="bg-white px-4 py-5"
          onClick={() => handleContainerClick("E")}
        >
          {/* Text for economy class */}
          <span data-i18n="cabin.E">السياحية</span>
          <input
            id="cb-eco"
            className="chk-cabin"
            type="radio"
            name="cabin-search"
            value="E"
            checked={selectedClass === "E"}
            onChange={() => setSelectedClass("E")}
            style={{ display: "none" }}
          />
        </Container>

        {/* Business class option */}
        <Container
          isSelected={selectedClass === "B"}
          className="bg-white px-4 py-5"
          onClick={() => handleContainerClick("B")}
        >
          {/* Text for business class */}
          <span data-i18n="cabin.B">الأعمال</span>
          <input
            id="cb-bus"
            className="chk-cabin"
            type="radio"
            name="cabin-search"
            value="B"
            checked={selectedClass === "B"}
            onChange={() => setSelectedClass("B")}
            style={{ display: "none" }}
          />
        </Container>

        {/* First class option */}
        <Container
          isSelected={selectedClass === "F"}
          className="bg-white px-4 py-5"
          onClick={() => handleContainerClick("F")}
        >
          {/* Text for first class */}
          <span data-i18n="cabin.F">الأولى</span>
          <input
            id="cb-frst"
            className="chk-cabin"
            type="radio"
            name="cabin-search"
            value="F"
            checked={selectedClass === "F"}
            onChange={() => setSelectedClass("F")}
            style={{ display: "none" }}
          />
        </Container>
      </div>
    </div>
  );
}

export default ClassFly;

// Styled component for cabin container
const Container = styled.div`
  background-color: ${(props) => (props.isSelected ? "#196dfb" : "white")};
  cursor: pointer;
  color: #fff;
  color: ${(props) => (props.isSelected ? "#fff" : "#b2b2b2")};
  text-align: center;
`;
