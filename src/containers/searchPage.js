import React, { useCallback, useEffect, useMemo, useState } from "react";
import withHeaderFooter from "../hocs/withHeaderFooter";
import PageHeader from "../components/pageHeaderSection";
import DropDown from '../components/atomicComponents/dropdown';
import FilterSection from "../components/filterSection";
import ListingView from "../components/listingView";
import { LISTING_URL } from "../constants";
import Loader from "../components/atomicComponents/loader";
import "./style.css";


const SearchPage = () => {
    const [nftData, setNftData] = useState({})
    const [showLoader, setShowLoader] = useState(false)
    const [isError, setIsError] = useState(false);

    const fetchList = async ( page, priceLow=0, priceHigh=10000000 ) =>{
        //setNftData({})
        setShowLoader(()=>true);
        setIsError(false);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        const params = new URLSearchParams({
            page,
            priceHigh,
            priceLow
          });
        const SEACRH_URL = `${LISTING_URL}${params}`;
        try{
            const response = await fetch(SEACRH_URL);
            setShowLoader(()=>false)
            if(response.ok){
                const dataJSON = await response.json()
                setNftData(dataJSON)
            }
            
        } catch(error){
            setIsError(true)
            setShowLoader(()=>false)
        }
    }
    useEffect(()=>{
        fetchList(1)
    },[])
    
    const pageChangeHandler = useCallback((pageNumber) =>{
        fetchList(pageNumber)
    },[])
    
    const priceFilterSubmitHandler = useCallback((priceLow, priceHigh ) =>{
        fetchList(1, priceLow, priceHigh)
    },[])

    const { listings=[], total=0 } = nftData
    return (
    <div className="searchPageContainer">
       <PageHeader 
        title="Marketplace"
        rightSection={<DropDown values={['Newest', 'Oldest', 'Rarity']} />}
       />
       <section className="container">
            <FilterSection priceFilterSubmitHandler={priceFilterSubmitHandler} applicableFilterList = {['search', 'price']} />
             {showLoader && !isError && (
                <div className="loaderContainer">
                    <Loader />
                </div> 
             )}  
             {!showLoader && isError && <div className="errorSearchPage">Some Error Occured, try Again</div> } 
             {total>0 && !isError && (<ListingView listings={listings} total={total} pageChangeHandler={pageChangeHandler}/>) }
       </section>
    </div>)
}

export default withHeaderFooter(SearchPage);