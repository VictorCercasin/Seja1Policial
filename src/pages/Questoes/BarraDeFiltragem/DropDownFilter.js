import React, { useState } from "react";

import Button from "./../../../components/UIElements/Button";
import "./DropDownFilter.css";

const DropDownFilter = (props) => {
  const [dropDown, setDropdown] = useState(false);

  const openFilterHandler = () => {
    setDropdown(true);
  };
  const closeFilterHandler = () => {
    setDropdown(false);
  };
  const buttonHandler = () => {
    dropDown && closeFilterHandler();
    !dropDown && openFilterHandler();
  };
  return (
      <div className={props.className}>
          <Button onClick={buttonHandler} id="filter-button">
            {props.children}
          </Button>
          {dropDown && <FilterBox filterSet={props.filterSet}></FilterBox>}
      </div>
  );
};

const FilterBox = (props) => {

  return (
    <ul id='form-list'>
      {props.filterSet.map((filterItem) => (
        <li>
          <Button >{filterItem}</Button>
        </li>
      ))}
    </ul>
  );
};

export default DropDownFilter;
