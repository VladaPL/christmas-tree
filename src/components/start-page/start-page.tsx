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
            <div className="title-container">
                <div className="title-container__text-help">Помоги бабушке нарядить ёлку</div>
                <div className="title-container__text-game">ИГРА<br/>НОВОГОДНЯЯ ЁЛКА</div>
            </div>
            <button>Начать</button>
        </div>
    );
};
