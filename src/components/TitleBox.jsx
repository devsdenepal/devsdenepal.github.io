import React from "react";
function TitleBox({title,heading,description}){
    return(
        <>
        <div className="titleBoxContainer"  data-aos="fade-down">
            <p className="titleBoxContainer-title">{title}</p>
            <h3>{heading}</h3>
            <p className="titleBoxContainer-description">{description}</p>
        </div>
        </>
    )
}

export default TitleBox;