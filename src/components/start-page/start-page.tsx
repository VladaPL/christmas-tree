import React from "react";
import "./start-page.css";
import backgroundImg from "../../images/bg.jpg";

const MainBackground = () => {
    return (
        <main className="main-background" style={{backgroundImage: `url(${backgroundImg})`}}>
            <StartPage/>
        </main>
    );
};

export default MainBackground;


const StartPage = () => {
    return (
        <div className="start-page" >
            <div className="start-page__text">Помоги бабушке нарядить ёлку</div>
            <div>ИГРА<br/>НОВОГОДНЯЯ ЁЛКА</div>
            <button>Начать</button>
        </div>
    );
};
