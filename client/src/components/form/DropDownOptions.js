import React from "react"

const DropDownOptions = (props) => {
  return props.genres.map((item) => {
    return <option key={item.toString()}>{item}</option>;
  });
};

export default DropDownOptions;
