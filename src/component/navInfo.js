import { useInputContext } from "../context/context";

function NavInfo() {
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

  return (
    <div className="" style={{ backgroundColor: "#0a0f57" }}>
      <div className="container px-8 mx-auto">
        <div className="flex flex-wrap justify-evenly py-2">
          <div class="text-xl flex flex-col justify-center items-center">
            <p>
              <span class="font-bold return-day-txt"></span>
              <span class="font-bold return-date-txt text-white">
                {departureDate}
              </span>
            </p>
            <span class="clearfix new-light" style={{ color: "#196df5" }}>
              الذهاب
            </span>
          </div>

          {/* 2 */}
          <div class="text-xl flex flex-col justify-center items-center">
            <p>
              <span class="font-bold return-day-txt"></span>
              <span class="font-bold return-date-txt text-white">
                {returnDate}
              </span>
            </p>
            <span class="clearfix new-light" style={{ color: "#196df5" }}>
              العودة
            </span>
          </div>

          {/* 3 */}
          <div class="text-xl flex flex-col justify-center items-center">
            <p>
              <span class="font-bold return-day-txt"></span>
              <span class="font-bold return-date-txt text-white">
                {inputValueFrom} - {inputValueTo}
              </span>
            </p>
            <p class="clearfix new-light" style={{ color: "#196df5" }}>
              <span> {travelClass ? travelClass : ""}-</span>
              <span> {adultCount ? adultCount + " بالغ" : ""}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavInfo;
