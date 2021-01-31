import React from 'react';
import "./DropDownBtn.css";

export default function DropDownBtn(props) {
    const { clicking, value } = props;
    return (
        <div className="DropDownBtn" >
            <button onClick={() => clicking(!value)}>BTN</button>
        </div>

    )
}
