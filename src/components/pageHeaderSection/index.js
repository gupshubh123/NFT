import React from "react";
import './style.css';


const PageHeader = ( { title , rightSection } ) =>{

    return (
         <div className="header">
            <h1 className="heading">
                {title}
            </h1>
            {rightSection}
        </div>
    )
}

export default React.memo(PageHeader);
