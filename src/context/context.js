// InputContext.js
import React, { createContext, useContext, useState } from "react";

const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
  // Get today's date
  const today = new Date();

  // Format today's date as YYYY-MM-DD
  const formattedDate = today.toISOString().split("T")[0];

  const [inputValueFrom, setInputValueFrom] = useState("DXB");
  const [inputValueTo, setInputValueTo] = useState("RUH");
  const [departureDate, setdepartureDate] = useState(formattedDate);
  const [returnDate, setreturnDate] = useState(formattedDate);
  const [adultCount, setAdultCount] = useState(1);
  const [kidCount, setKidCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [travelClass, setTravelClass] = useState("ECONOMY");

  return (
    <InputContext.Provider
      value={{
        inputValueFrom,
        setInputValueFrom,
        inputValueTo,
        setInputValueTo,
        departureDate,
        setdepartureDate,
        returnDate,
        setreturnDate,
        adultCount,
        setAdultCount,
        kidCount,
        setKidCount,
        infantCount,
        setInfantCount,
        travelClass,
        setTravelClass,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
