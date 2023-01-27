import React, { useRef, useState } from "react";
import PrimaryButton from '../../atomicComponents/buttons/primary';
import "./style.css";

const PriceFilter = ({ priceFilterSubmitHandler })=>{
    const lowRef = useRef(null);
    const highRef = useRef(null);
    const [lowValue, setLowValue] = useState(100);
    const [highValue, setHighValue] = useState(1000);
    const [applyButtonActive, setApplyButtonActive] = useState(true)
    
    const validateInputs = ()=>{
        const lowValue = lowRef.current.value
        const highValue = highRef.current.value
        setApplyButtonActive(highValue>=lowValue)
    }

    const lowChangeHanlder = (e) =>{
        setLowValue(e.target.value);
        validateInputs()
    }

    const highChangeHanlder = (e) =>{
        setHighValue(e.target.value);
        validateInputs()
    }

    const applyHandler = () =>{
        const lowValue = lowRef.current.value
        const highValue = highRef.current.value
        priceFilterSubmitHandler(lowValue, highValue)
    }

    return(<div className="filterWrapper">
        <div className="filterHeading">
            Price Range
        </div>
        <div className="filterBody">
            <div className="title">
                Low
            </div>
            <input ref={lowRef} className="searchInput" onChange={lowChangeHanlder} value={lowValue}/>
                
            <div className="title" style={{marginTop:'20px'}}>
                High
            </div>
            
            <input ref={highRef} className="searchInput" onChange={highChangeHanlder} value={highValue}/>
            
            <PrimaryButton 
                disabled={!applyButtonActive}
                buttonText="Apply"
                clickHandler={applyHandler}
                style={{ marginTop:'20px', width:'100%'}}
            />   
            
        </div>

    </div>)

}

export default PriceFilter;