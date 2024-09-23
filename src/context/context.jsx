import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProviderComponent = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");


  const delayPara = (index, nextWord) =>{
    setTimeout(() => {
      setResultData(prev => prev+nextWord)
    }, 75*index);
  }
  const newChat = () => {
    setLoading(false)
    setResult(false)
  }
  const onSent = async () => {
    setLoading(true);
    setResultData(""); // Clear previous data
    setResult(true);
    setRecentPrompt(input);
    setPrevPrompt(prev => [...prev,input])
    console.log("Input before API call:", input);

    const result = await run(input); // Call the API and get the response

    console.log("API response:", result);
    let responseArray = result.split("**");
    let newArray = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        newArray += responseArray[i];
      } else {
        newArray += "<strong>" + responseArray[i] + "</strong>";
      }
    }
    let newResponse2 = newArray.split("*").join("</br>");
    let newResponseArray = newResponse2.split(' ')
    for(let i=0 ; i< newResponseArray.length; i++){
      const next = newResponseArray[i]
      delayPara(i,next + " ")
    }
    setResultData(newResponse2);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    onSent,
    prevPrompt,
    setPrevPrompt,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
    {props.children}
  </Context.Provider>
  );
};

export default ContextProviderComponent;