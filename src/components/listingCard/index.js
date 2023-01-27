import React from "react";
import "./style.css";

const ListingCard = ({ data })=>{
    const { title, subtitle, rarity:{ color, name:rarityName }, lowestPrice, image, collection: { name } } =data
    return (
    <div className="listingCardWrapper">
        <div className="imageSection">
            <img src={image} className="listingCardImage"/>
        </div>    
        <div className="detailSection">
            <div className="topSection">
                <div className="nftTitle">
                    {title}
                </div>
                <div className="nftSubtitle">
                    {subtitle}
                </div>
            </div>
            <div className="bottomSection">
                <div className="rarity" style={{ color }}>
                    {rarityName}
                </div>
                <div className="collectionName">
                      {name}  
                </div>
                <div className="priceSection">
                    <div className="priceText">
                        Starting at:
                    </div>
                    <div className="priceValue">
                        ${lowestPrice}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ListingCard;