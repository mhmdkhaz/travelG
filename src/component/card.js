import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useInputContext } from "../context/context";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import ModalChoose from "./modalChoose";

function Card({ isChecked1, dataFilter, filPrice }) {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTravelInfo, setSelectedTravelInfo] = useState(null);

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

  const filteredData = useMemo(() => {
    if (!isChecked1 || !isChecked1.length) return [];

    const filteredData = data.filter((info) => {
      if (isChecked1[0] && !info.oneWay) return true;
      if (isChecked1[1] && info.oneWay) return true;
      return false;
    });

    if (dataFilter.length > 0) {
      return filteredData.filter((info) =>
        dataFilter.includes(info.itineraries[0].segments[0].carrierCode)
      );
    }

    if (filPrice.length > 0) {
      return filPrice;
    }

    return filteredData;
  }, [isChecked1, data, dataFilter]);

  useEffect(() => {
    if (isChecked1) {
      const token = "vHY8LHdgjaVTckFSX6N8Tf3OLdSS";
      const apiUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${inputValueFrom}&destinationLocationCode=${inputValueTo}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${adultCount}&children=${kidCount}&infants=${infantCount}&travelClass=${travelClass}&currencyCode=SAR&max=100`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response?.data?.data);
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    }
  }, [
    isChecked1,
    inputValueFrom,
    inputValueTo,
    departureDate,
    returnDate,
    adultCount,
    kidCount,
    infantCount,
    travelClass,
    data, // Add data as a dependency
  ]);

  const handleButtonClick = (travelInfo) => {
    setSelectedTravelInfo(travelInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* start in model data */}
      <ModalChoose
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedTravelInfo={selectedTravelInfo}
      />
      {/* start in card data  */}
      {filteredData &&
        filteredData.map((travelInfo) => (
          <Div key={travelInfo.id} className="grid grid-cols-12 ">
            {/* First card */}
            <div className="flex justify-center items-center relative col-span-4 ">
              <div className="flex flex-col justify-center items-center w-full">
                <h1
                  className="flex flex-row-reverse gap-2 font-semibold text-xl"
                  style={{ color: "#196dfb" }}
                >
                  {travelInfo?.price?.total} <span>ريال</span>
                </h1>
                <Button
                  className="w-full py-2 mt-2"
                  onClick={() => handleButtonClick(travelInfo)}
                >
                  اختيار
                </Button>
              </div>
            </div>
            {/* Second card */}
            <Flight className=" relative col-span-1">
              <Line></Line>
            </Flight>
            {/* Third card */}
            <div className="flex flex-col justify-center items-center gap-2 relative col-span-1">
              <Status
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/image/result/seats-status.svg)`,
                }}
              ></Status>
              <p style={{ color: "#1f9ea5" }}>اختر</p>
            </div>
            {/* Fourth card */}
            <div className=" flex justify-center relative col-span-4">
              <div className="flex flex-col items-end justify-start">
                <div
                  className="clearfix flex flex-row-reverse justify-center items-center gap-5 font-semibold text-2xl"
                  style={{ color: "#114aaf" }}
                >
                  <div className="inline-block vertical-middle">
                    <span className="time new-bold-dark">
                      <span className="time new-bold-dark">
                        {new Date(
                          travelInfo?.itineraries[1]?.segments[0]?.departure?.at
                        ).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </span>
                    </span>
                  </div>
                  <div
                    className="inline-block vertical-middle flight-arrow text-xl"
                    style={{ color: "#b3b3b3" }}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <div className="inline-block vertical-middle">
                    <span className="time new-bold-dark">
                      {new Date(
                        travelInfo?.itineraries[1]?.segments[0]?.arrival?.at
                      ).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </span>
                  </div>
                </div>
                <p className=" mt-4 mb0" style={{ color: "#b3b3b3" }}>
                  <span>02س (رحلة مباشرة)</span>
                </p>
                <p className="" style={{ color: "#b3b3b3" }}>
                  EK2270 (:شغلها خطوطفلاي دبي){" "}
                </p>
              </div>
            </div>
            {/* Fifty card */}
            <div className="relative col-span-2">
              <DivImg
                className="flight-image i-ek "
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/image/result/airlines-logo-50px.svg)`,
                }}
              ></DivImg>
            </div>
          </Div>
        ))}
    </div>
  );
}

export default Card;

const Div = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 20px;
  width: 100%;
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

const Status = styled.div`
  display: inline-block;
  width: 50px;
  height: 34px;
  background-position: 0 0;
`;

const Flight = styled.div`
  &::before {
    content: "";
    width: 16px;
    height: 16px;
    background-color: #e6f0ff;
    position: absolute;
    top: -27px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: #e6f0ff;
    position: absolute;
    bottom: -27px;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const Line = styled.div`
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: calc(50% - 1px);
    border-left: 2px dotted;
    border-color: #ccc;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Button = styled.button`
  background-color: #196dfb;
  border: 0;
  color: #fff;
  outline: 0;
  box-shadow: none;
`;
