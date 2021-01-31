import { useState } from 'react';
import './App.css';
import DropDown from './DropDown/DropDown';
import DropDownBtn from './DropDown/DropDownBtn/DropDownBtn';
import DropDownItem from './DropDown/DropDownMenu/DropDownItem/DropDownItem';
import DropDownMenu from './DropDown/DropDownMenu/DropDownMenu';

function App() {
  const [show, setShow] =useState(false);

  return (
    <div className="App">
      <DropDown>
        <DropDownBtn clicking={setShow} value={show} />
        <DropDownMenu toShow={show} changefunc={setShow} >
          <DropDownItem>1</DropDownItem>
          <DropDownItem>2</DropDownItem>
          <DropDownItem>3</DropDownItem>
        </DropDownMenu>
      </DropDown>
    </div>
  );
}

export default App;
