import React, { useEffect, useState } from "react";
import ListingCard from "../listingCard";
import "./style.css";

const ListingView = ({ listings, total, pageChangeHandler } ) =>{
    const [currentPage, setCurrentPage] = useState(1);
    const totalPagesToRender = Math.ceil(total/9)

    useEffect(()=>{
        pageChangeHandler(currentPage)
    },[currentPage])

    return(<div>
        <div className="listingCardViewsSection">
            {listings.map((nftData)=><ListingCard data={nftData}/>)}
        </div>
        {total > 9 && (
             <div className="paginationSection">
                {Array.from(Array(totalPagesToRender), (e, i) => {
                    let pageNumber = i+1
                    if(pageNumber === currentPage || 
                        pageNumber+1 === currentPage || 
                        pageNumber+2 === currentPage || 
                        pageNumber-1 === currentPage || 
                        pageNumber-2 === currentPage){
                        return <div key={i} onClick={()=>setCurrentPage(pageNumber)} className={`pageNumber ${currentPage === pageNumber? `active`:``}`} >{pageNumber}</div>
                    }else if(pageNumber+3 === currentPage || pageNumber-3 === currentPage ){
                        return <div key={i}  className={`pageNumber elip`} >...</div>
                    }else if( total>10 && (pageNumber+4 === currentPage)  )  {
                        return <div key={i} onClick={()=>setCurrentPage(pageNumber)} className={`pageNumber ${currentPage === pageNumber? `active`:``}`} >{1}</div>
                    }else if( total>10 && (pageNumber-4 === currentPage)  )  {
                        return <div key={i} onClick={()=>setCurrentPage(pageNumber)} className={`pageNumber ${currentPage === pageNumber? `active`:``}`} >{totalPagesToRender}</div>
                    }
                })}
            </div>
        )}
       
    </div>)

}

export default React.memo(ListingView)