require ("./styles.css");
import React from "react";
import { render } from "react-dom";
import console1 from "./1";
import console2 from "./2";

export default function App () {
    const element = (
        <div style={{backgroundColor: "yellow"}}>
        <h1>Hello</h1>
        </div>
    )
render(element, document.getElementById("app"))
}
App();
console1();
console2();

