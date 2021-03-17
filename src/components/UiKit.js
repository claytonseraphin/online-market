import React from "react";
//import from the components folder
import Button from "./components/ui-kits/Button.js";
import Input from "./components/ui-kits/Input.js";

export default function UiKit(){
    function handleButtonClick(){
        console.log("Button Clicked");
    }
    
    function handleLastNameInput() {
        console.log("Last name changed");
    }

    return (
        <div style={{dispay: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
      <h1>Welcome</h1>
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
      <Input placeholder="First name" />
      <Input placeholder="Last name" onInput={handleLastNameInput} />
      <Input placeholder="Email" type="email" required />
    </div>
    );
}