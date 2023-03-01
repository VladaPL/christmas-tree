import { type } from "os";
import React, {Component} from "react";
import "./header.css";



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
            <HeaderButton text="ИГРУШКИ"/>
            <HeaderButton text="ЕЛКА"/>
        </header>);
    }

}