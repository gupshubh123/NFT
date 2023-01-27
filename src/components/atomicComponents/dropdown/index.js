import React, { useEffect, useState } from "react";
import "./style.css";

const DropDown = ({ values }) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const [displayList, setDisplayList] = useState(false);

  const changeSelectedValue = (value) => {
    setDisplayList(false);
    setSelectedValue(value);
  };

  const toggleListHandler = () => {
    setDisplayList((value) => !value);
  };
  


  //hide the dropdown list if user clicks on document elsewhere
  useEffect(()=>{
    document.addEventListener("click",(e)=>{
        if(e.target.closest('.dropDownContainer') === null){
            setDisplayList(false);
        }
    })
  },[])



  return (
    <div className="dropDownContainer" >
      <div className="selectedValue" onClick={toggleListHandler} >
        <div className="selectedText">{selectedValue}</div>
        <div onClick={toggleListHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="dropdownArrows"
          >
            <path
              fillRule="evenodd"
              d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      {displayList && (
        <div className="listValues">
          {values.map((item, index) => (
            <div
              key={index}
              onClick={() => changeSelectedValue(item)}
              className={`listValue ${item === selectedValue ? `active`:``} `}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
