import React, { useCallback, useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(1);
  console.log("rendering");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const prime =()=>{
//     console.log("Calculate prime number of ",text); // issue har re render pe cal ho raha hai jab toggle kar rahe theme ko tab bhi hone lagta
//     return findNthPrime(text)
//   };

//heavy opeartion : I can memoise that heavy operation

  const prime=useMemo(()=>findNthPrime(text),[text])// without this toggle pe bhi calc karta 
  //const prime=useCallback(findNthPrime(text),[text]) // yaha func and upar me value return by function ko cache karte hai


  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-800 text-white")
      }
    >

      <input
        type="number"
        className="p-2  border  border-black w-full h-12 rounded-md text-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Input text"
      />
      <div>
        <h1 className="mt-4 font-bold ">
          Nth Prime of {text} is {prime}
        </h1>
      </div>
      <div>
        <button className="mt-4 rounded-md shadow-lg  p-2 bg-purple-500 hover:bg-purple-600" onClick={() => setIsDarkTheme(!isDarkTheme)}> toggle </button>
      </div>
    </div>
  );
};

export default Demo;
