import React,{useMemo}  from "react";
import DropFilter from "./filterList/dropFilter";
import PriceFilter from "./filterList/priceFilter";
import RarityFilter from "./filterList/rarityFilter";
import SearchFilter from "./filterList/searchFilter";
import "./style.css";


const FilterSection = ( { applicableFilterList, priceFilterSubmitHandler } ) =>{
   
    const searchHandler = (value)=>{ 
        console.log(value)
    }

    const filterToComponentMappting = useMemo(()=>({
        search: {
            id:'search',
            Component: SearchFilter,
            props:{
                searchHandler
            }
        },
        price: {
            id: 'price',
            Component:PriceFilter,
            props:{
                priceFilterSubmitHandler
            }
        },
        rarity: {
            id: 'rarity',
            Component:RarityFilter,
            props:{
                
            }
        },
        drop: {
            id: 'drop',
            Component:DropFilter,
            props:{
                
            }
        }
    }
    ),[])
    

    return (<div className="filterSection">
        {applicableFilterList.map((item)=>{
            const { Component, id, props } = filterToComponentMappting[item]
            return (
            <div key={id}>
                <Component {...props} />
            </div>)
        })}
    </div>)
}

export default FilterSection;