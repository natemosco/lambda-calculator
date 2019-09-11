import React, {useState} from "react";
import "./App.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from"./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [input, setInput] = useState("")
  function clickDisplay (buttonValue) {
    setInput(input + buttonValue);
    if(buttonValue === "=" && input.includes("%")){
      let right = Number(input.slice(input.indexOf("%")+1)) / 100;
      debugger
      let left = Number(input.slice(0,input.indexOf("%")))
      setInput((left*right).toString())
      return
    }
    if (buttonValue === "="){ 
      setInput(eval(input))
    }
    if(buttonValue === "C"){
      setInput("")
    }
    if(buttonValue === "+/-"){
      let num = Number(input);
      let neg = num * -1;
      let negString = neg.toString();
      setInput(eval(negString))
    }
  }
  
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display content = {input}/>
        <section>
          <div className="left">
            <Specials handleClick = {clickDisplay}/>
            <Numbers handleClick = {clickDisplay}/>  
          </div>
          <div className="right">
            <Operators handleClick = {clickDisplay}/>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
