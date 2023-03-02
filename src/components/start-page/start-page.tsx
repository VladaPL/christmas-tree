import React from "react";
import "./start-page.css";
import backgroundImg from "../../images/bg.jpg";

const StartPage = () => {
    return (<div className="start-page" style={{ 
        backgroundImage: `url(${backgroundImg})` 
      }}>Start page</div>);
};

export default StartPage;