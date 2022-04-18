import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { PinItem } from "./PinItem";
import styled from "styled-components";
const Div = styled.div`
  width: 440px;
  height: 150px;
  margin: auto;
  background-color: #bbcccb;
  text-align: center;
  box-sizing: border-box;
`;

export const InputBoxes = ({ length, label, perBox, onChange }) => {
  const [value, setValue] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (v, index) => {
    console.log(v, index);
    const temp = [...value];
    temp[index] = v;
    setValue(temp);
    if (v.length > 0 && v.length <= perBox && index < length - 1) {
      elements.current[index + 1].focus();
    }
    onChange(temp.join(""));
  };

  const handleBackBtn = (v, index) => {
    if (index > 0) {
      elements.current[index - 1].focus();
    }
    const temp = [...value];
    temp[index] = v;
    setValue(temp);
    onChange(temp.join(""));
  };

  const handlePaste = (e) => {
    console.log(e.clipboardData.getData("Text"));
  };

  return (
    <Div onPaste={handlePaste}>
      <h1>{label}</h1>
      {value.map((item, index) => (
        <PinItem
          key={index}
          ref={(n) => (elements.current[index] = n)}
          onChange={(val) => handleChange(val, index)}
          max={perBox}
          onBackBtn={(v) => handleBackBtn(v, index)}
        />
      ))}
    </Div>
  );
};

InputBoxes.propTypes = {
  length: PropTypes.number,
  perBox: PropTypes.number,
  label: PropTypes.string,
};

InputBoxes.defaultProps = {
  label: "Pin Input",
  perBox: 1,
};
