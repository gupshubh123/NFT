import React, { useEffect, useRef, useState } from "react";
import "./style.css"

const SearchFilter = ( {searchHandler} )=>{
    const inputRef = useRef(null);
    const [searchValue, setSearchInputValue] = useState("")
    
    const searchInputHandler = (e) =>{
        const value = e.target.value;
        setSearchInputValue(value);
    }
    /**
     * debounce function for search input, for 600ms
     */
    useEffect(()=>{
        let timerId;
        timerId = setTimeout(()=>{
            if(searchValue){
                searchHandler(searchValue)
            }
        }, 600)
        return ()=>{
            clearTimeout(timerId)
        }
    },[searchValue, searchHandler]);

    return (
        <div className="searchContainer">
            <input ref={inputRef} className="searchInput" onChange={searchInputHandler} value={searchValue} placeholder="Search"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="searchIcon"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
        </div>
    )
}

export default SearchFilter;