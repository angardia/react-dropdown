import React from 'react';
import "./DropDownItem.css";

export default function DropDownItem(props) {
    return (
        <li className="DropDownItem">{props.children}</li>
    )
}
