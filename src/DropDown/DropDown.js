import React from 'react';
import "./DropDown.css";

export default function DropDown(props) {
    return (
        <div className="DropDown"  >
            {props.children}
        </div>
    )
}
