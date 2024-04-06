import { useEffect, useState } from "react";
import axios from "axios";
import { useInputContext } from "../context/context";
import NavInfo from "../component/navInfo";
import LengthResult from "../component/lengthResult";
import Card from "../component/card";
import Filter from "../component/filter.js";

function Result() {
  const [carriers, setCarriers] = useState([]);
  const [isChecked1, setIsChecked1] = useState([]);
  const [dataPrice, setDataPrice] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [valuePrice, setValuePrice] = useState(0); // State to store current price value
  const [filterPrice, setFilterPrice] = useState(0); // State to store current price value

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
    const newIsChecked1 = [...isChecked1];
    newIsChecked1[index] = !newIsChecked1[index];
    setIsChecked1(newIsChecked1);

    const isCodeSelected = dataFilter.includes(carCode);

    if (isCodeSelected) {
      setDataFilter(dataFilter.filter((code) => code !== carCode));
    } else {
      setDataFilter([...dataFilter, carCode]);
    }
  };

  useEffect(() => {
    const token = "vHY8LHdgjaVTckFSX6N8Tf3OLdSS";
    const apiUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${inputValueFrom}&destinationLocationCode=${inputValueTo}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${adultCount}&children=${kidCount}&infants=${infantCount}&travelClass=${travelClass}&currencyCode=SAR&max=100`;

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
          const carriersArray = Object.entries(
            response.data.dictionaries.carriers
          );
          setIsChecked1(Array(carriersArray.length).fill(false));
          setCarriers(carriersArray);
          setDataPrice(response?.data?.data);

          const prices = response?.data?.data.map(
            (flight) => flight.price.total
          );
          const min = Math.min(...prices);
          const max = Math.max(...prices);

          setMinPrice(min);
          setMaxPrice(max);
          setValuePrice(min); // Set initial valuePrice to minPrice
        } else {
          console.error("Carriers data is not as expected:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredDataPrice = dataPrice.filter((flight) => {
    const totalPrice = flight.price.total;
    return (
      (minPrice === 0 && maxPrice === 0) ||
      (totalPrice >= minPrice && totalPrice <= maxPrice)
    );
  });

  useEffect(() => {
    if (minPrice > 0 || maxPrice > 0) {
      setFilterPrice(filteredDataPrice);
    } else {
      setFilterPrice(dataPrice);
    }
  }, [minPrice, maxPrice, dataPrice]);

  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    setValuePrice(value);
    setMinPrice(value);
  };

  return (
    <div style={{ backgroundColor: "#e6f0ff" }} className="w-full">
      <NavInfo />
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-7">
          <div className="col-span-7 md:col-span-5">
            <LengthResult />
            <Card
              isChecked1={isChecked1}
              dataFilter={dataFilter}
              filPrice={filterPrice}
            />
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
                  dataFilter="street"
                  checked={isChecked1[0]}
                  onChange={() => handleCheckboxChange1(0, "street")}
                />
              </div>
              <div className="mt-4">
                <Filter
                  text="طريق واحد"
                  dataFilter="onWay"
                  checked={isChecked1[1]}
                  onChange={() => handleCheckboxChange1(1, "onWay")}
                />
              </div>
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
                      dataFilter={carrierCode}
                      checked={isChecked1[index + 2]}
                      onChange={() =>
                        handleCheckboxChange1(index + 2, carrierCode)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className=" mt-5">
                <h1
                  className="font-semibold text-right"
                  style={{ color: "#196df5" }}
                >
                  خطوط الطيران
                </h1>
                <div className="relative mb-6">
                  <label htmlFor="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  <input
                    id="labels-range-input"
                    type="range"
                    value={valuePrice}
                    min={minPrice}
                    max={maxPrice}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    Min {minPrice}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    Max {maxPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
