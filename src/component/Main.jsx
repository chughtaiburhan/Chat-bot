import React, { useContext } from "react";
import { motion } from "framer-motion";
import UserIcon from "../assets/user_icon.png";
import CompassIcon from "../assets/compass_icon.png";
import BulbIcon from "../assets/bulb_icon.png";
import MessageIcon from "../assets/message_icon.png";
import CodeIcon from "../assets/code_icon.png";
import GalleryIcon from "../assets/gallery_icon.png";
import Gemini from "../assets/gemini_icon.png";
import SendIcon from "../assets/send_icon.png";
import MicIcon from "../assets/mic_icon.png";
import { Context } from "../context/context"; // Update the path as necessary
import "../style/main.css";

function Main() {
    const context = useContext(Context);
    console.log("Context Values: ", context); 

  if (!context) {
    console.error("Context is undefined. Check the provider.");
  }
  
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={UserIcon} alt="icon" />
      </div>

      {/* Main container */}
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello World .</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={CompassIcon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={BulbIcon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={MessageIcon} alt="" />
              </div>
              <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={CodeIcon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            <motion.div
              className="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="result-title">
                <img src={UserIcon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={Gemini} alt="Gemini Image" />
                {resultData ? (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                ) : (
                  <p>Generating...</p>
                )}
              </div>
            </motion.div>
          </>
        )}
        {/* Input Prompting */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={GalleryIcon} alt="" />
              <img src={MicIcon} alt="" />
             {input ?<img src={SendIcon} alt="" onClick={onSent} /> : null} 
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate result, including about people, so
            double-check its responses. Your privacy and Gemini App
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;