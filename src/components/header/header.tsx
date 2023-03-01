import { type } from "os";
import React, {Component} from "react";
import "./header.css";
import logoImage from "../../images/svg/tree.svg";


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
                <img src={logo} alt="logo-image"/>
            </div>
        );
    }
}



type HeaderButtonProps = {
    text: string;
};

const HeaderButton = ({text}: HeaderButtonProps) => {

    return (<button>{text}</button>);
};



export default class Header extends Component {

    render(): React.ReactNode {

        return (
        <header className="header">
            <Logo/>
            <HeaderButton text="ИГРУШКИ"/>
            <HeaderButton text="ЕЛКА"/>
        </header>);
    }

}