import { forwardRef } from "react";
import styled from "styled-components";

const style = {
  width: 29,
  padding: 20,
  fontSize: 22,
  margin: 5,
  borderRadius: 4,
  outline: 0,
};

const Input = styled.input`
  text-align: center;
  border: 2px solid rgba(104, 109, 109, 0);
  :hover {
    box-shadow: rgba(2, 161, 153, 0.24) 0px 4px 12px;
    border: 2px solid rgba(2, 161, 153, 0.24);
  }
`;

export const PinItem = forwardRef(({ onChange, onBackBtn, max }, ref) => {
  const handleKey = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 8:
        if (!e.target.value) onBackBtn(e.target.value);
        break;
      case 9:
        e.preventDefault();
        break;
      default:
        onChange(e.target.value);
    }
  };

  return <Input onKeyUp={handleKey} ref={ref} maxLength={max} style={style} />;
});
