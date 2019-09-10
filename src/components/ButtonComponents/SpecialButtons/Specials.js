import React from "react";
import data from "../../../data"; // object includes {numbers, operators, specials}
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(data.specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {data.specials.map((e,i)=>{
        <SpecialButton key={i} specialSymbol={e}/>
      })} 
    </div>
  );
};
export default Specials;