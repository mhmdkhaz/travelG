// Filter.js
import styled from "styled-components";

function Filter({ text, checked, onChange, dataFilter }) {
  return (
    <FilterContainer className="flex flex-col items-end justify-start mt-4 icheckbox_square-green">
      <div className="relative">
        <span
          data-i18n="flight.directflight"
          className="mr-8"
          style={{ color: "#4d4e4e" }}
        >
          {text}
        </span>
        <CustomLabel htmlFor={text} checked={checked}>
          <Input
            className="i-check filter-stops"
            id={text}
            type="checkbox"
            value="0"
            data-filter={dataFilter}
            checked={checked}
            onChange={onChange}
          />
          <CustomCheckbox checked={checked}></CustomCheckbox>
        </CustomLabel>
      </div>
    </FilterContainer>
  );
}

export default Filter;

const FilterContainer = styled.div`
  .icheckbox_square-green.checked {
    background-color: #9c6;
  }
`;

const CustomLabel = styled.label`
  position: relative;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
`;

const CustomCheckbox = styled.div`
  position: absolute;
  top: 0;
  left: -18px;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  transition: all 0.3s;
  background-color: ${(props) => (props.checked ? "#9c6" : "#fff")};
  &:after {
    content: "${(props) => (props.checked ? "✔" : "")}"; // Checkmark
    font-size: 12px; // Adjust size as needed
    color: #fff; // Checkmark color
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${(props) => (props.checked ? "1" : "0")};
  }
`;
