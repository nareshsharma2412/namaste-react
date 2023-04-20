import React from "react";
import ReactDOM from "react-dom/client";

// JSX: babel transpiles it to React.createElement("h1",{})
// const jsxHeader = (<h1>
//     Hello from JSX heading
//     </h1>
//     )
// console.log(jsxHeader)

// REACT FUNCTIONAL COMPONENT(). 
let dynamicTitle= "Namaste javascript"
const Title= () =>{
    return <h1>{dynamicTitle}</h1>
}
const TitleDesc= () =>{
    return <p>This is the demo title text.</p>
}
const Card= () =>{

    return(
        <div id="card">
            {/* component composition */}
            <Title></Title>
            <TitleDesc/>

        </div>
    )
}

let cc = Card()
console.log("CARD:::",cc)

const TitleComponent = () => <h1>This is a functional Title component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

// root.render(jsxHeader)
root.render(<Card />)
root1.render(<Card />)

