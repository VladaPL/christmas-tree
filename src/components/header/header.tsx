import { type } from "os";
import React, {Component} from "react";
import "./header.css";
import logoImage from "../../images/svg/tree.svg";
//import countBall from "../../images/svg/ball-2.svg";


type LogoState = {
    active: boolean;
    logoImage: string;
};

class Logo extends Component<{}, LogoState> {

    state: LogoState = {
        active: false,
        logoImage: logoImage
    }

    render(): React.ReactNode {
        const logo = this.state.logoImage;
        return (
            <div className="logo">
                <img className="logo__img" src={logo} alt="logo-tree"/>
            </div>
        );
    }
}



type HeaderButtonProps = {
    text: string;
};

const HeaderButton = ({text}: HeaderButtonProps) => {

    return (<button className="header__button">{text}</button>);
};

type CountToysProps = {
    value: number;
};

const CountToys = ({value}: CountToysProps) => {
    return (
        <div className="count-toys">
            <span className="count-toys__value">{value}</span>
        </div>
    );
};



export default class Header extends Component {

    render(): React.ReactNode {

        return (
            <header className="header">
                <div className="wrapper header__wrapper">
                        <div className="header-buttons__wrapper">
                            <Logo/>
                            <HeaderButton text="ИГРУШКИ"/>
                            <HeaderButton text="ЕЛКА"/>
                        </div>
                    <CountToys value={5}/>
                </div>
            </header>
        );
    }

}