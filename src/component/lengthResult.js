import styled from "styled-components";

function lengthResult({ leng }) {
  return (
    <div className="flex flex-row-reverse justify-between items-center">
      <div className="flex flex-row-reverse items-center justify-center gap-1">
        <div className="flex  items-center justify-center w-20 h-20">
          <Span
            className="trip-out white inline-block w-3/4 h-2/4"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/image/result/trip-white.svg)`,
            }}
          ></Span>
        </div>
        <div className="flex flex-col items-center justify-center mr10">
          <h4 style={{ color: "#114aaf" }} className="text-xl font-semibold">
            <span className="new-bold-dark font-20">رحلة الذهاب</span>
            <span className="flight-count new-bold-dark"> {leng} </span>
            <span className="new-bold-dark" data-i18n="common.results">
              النتائج
            </span>
          </h4>
          <div
            className="clearfix inline-middle new-light"
            style={{ color: "#196df5" }}
          >
            جمعة، 12 أبريل
          </div>
        </div>
      </div>
      {/* sort */}
      <p></p>
    </div>
  );
}

export default lengthResult;

const Span = styled.span`
  background-size: cover;
  background-position: right;
`;
