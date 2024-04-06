import NavInfo from "../component/navInfo";
import LengthResult from "../component/lengthResult";
import Card from "../component/card";
import Filter from "../component/filter.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useInputContext } from "../context/context";

function Result() {
  const [carriers, setCarriers] = useState([]);
  const [isChecked1, setIsChecked1] = useState([]);
  const [len, setLen] = useState([]);
  const [dataFilter, setDataFilter] = useState([]); // State to store dataFilter value
  const {
    inputValueFrom,
    inputValueTo,
    departureDate,
    returnDate,
    adultCount,
    kidCount,
    infantCount,
    travelClass,
  } = useInputContext();

  const handleCheckboxChange1 = (index, carCode) => {
    // Create a copy of isChecked1 array
    const newIsChecked1 = [...isChecked1];
    // Toggle the value of the clicked checkbox
    newIsChecked1[index] = !newIsChecked1[index];
    // Update the state with the new array
    setIsChecked1(newIsChecked1);

    // Check if the carrier code already exists in the filter
    const isCodeSelected = dataFilter.includes(carCode);

    // Update dataFilter state based on checkbox changes
    if (isCodeSelected) {
      // If code is already selected, remove it from the filter
      setDataFilter(dataFilter.filter((code) => code !== carCode));
    } else {
      // If code is not selected, add it to the filter
      setDataFilter([...dataFilter, carCode]);
    }
  };

  useEffect(() => {
    const token = "8rtZIBhP1EfBnxGG4quleGgtr5lN";
    const apiUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${inputValueFrom}&destinationLocationCode=${inputValueTo}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${adultCount}&children=${kidCount}&infants=${infantCount}&travelClass=${travelClass}&currencyCode=SAR&max=50`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (
          response?.data?.dictionaries &&
          response.data.dictionaries.carriers
        ) {
          // Convert carriers object to an array of key-value pairs
          const carriersArray = Object.entries(
            response.data.dictionaries.carriers
          );
          // Initialize isChecked1 state with false for each carrier
          setIsChecked1(Array(carriersArray.length).fill(false));
          setCarriers(carriersArray);
          setLen(response.length);
        } else {
          console.error("Carriers data is not as expected:", response.data);
        }
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#e6f0ff" }} className="w-full">
      <NavInfo />
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-7">
          <div className="col-span-7 md:col-span-5">
            <LengthResult leng={len} />
            <Card
              isChecked1={isChecked1}
              dataFilter={dataFilter}
              carriers={carriers}
            />
            {/* Pass dataFilter as prop */}
          </div>
          <div className="col-span-7 md:col-span-2 mt-12">
            <div>
              <h1
                className="font-semibold text-right"
                style={{ color: "#196df5" }}
              >
                توقف
              </h1>
              <div className="mt-4">
                <Filter
                  text="رحلة مباشرة"
                  dataFilter="street" // Set dataFilter value
                  checked={isChecked1[0]}
                  onChange={() => handleCheckboxChange1(0, "street")} // Pass dataFilter value
                />
              </div>
              <div className="mt-4">
                <Filter
                  text="طريق واحد"
                  dataFilter="onWay" // Set dataFilter value
                  checked={isChecked1[1]}
                  onChange={() => handleCheckboxChange1(1, "onWay")} // Pass dataFilter value
                />
              </div>
              {/* 2 */}
              <div className=" mt-5">
                <h1
                  className="font-semibold text-right"
                  style={{ color: "#196df5" }}
                >
                  خطوط الطيران
                </h1>
                {carriers.map(([carrierCode, carrierName], index) => (
                  <div className="mt-4" key={index}>
                    <Filter
                      text={carrierName}
                      dataFilter={carrierCode} // Set dataFilter value
                      checked={isChecked1[index + 2]} // Start from index 2
                      onChange={() =>
                        handleCheckboxChange1(index + 2, carrierCode)
                      } // Pass dataFilter value
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
