import React, { useRef, useEffect } from 'react';
import "./DropDownMenu.css";

export default function DropDownMenu(props) {
    const { toShow , changefunc} = props;
    const ref = useRef();
    console.log(ref);

    const handleClick = (e) => {
        if (ref.current.contains(e.target)) {
          return;
        }
        changefunc(false);
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
          document.removeEventListener('mousedown', handleClick);
        };
       });

    return (
        <div ref={ref} className="DropDownMenu">
            {toShow &&
                <ul>
                    {props.children}
                </ul>}
        </div>


    )
}
