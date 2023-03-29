import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./style/home.scss";
import typing from "../assest/typing.mp3";
import typing2 from "../assest/typing2.mp3";
import BackGround from "../assest/BackGround.mp3";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  /********************************************************** */
  // ********************* Handle Key Sound Functions *********************
  function handleKeyPress(event) {
    if (event.key === "Backspace") {
      const backspaceSound = new Audio(typing2);
      backspaceSound.play();
    }
  }
  function playKeypressSound() {
    const audio = new Audio(typing);
    setTimeout(() => {
      audio.play();
    }, 100); // adjust the delay time as needed for smoother sound
  }
  const handleKeyDown = () => {
    setIsTyping(true);
  };

  const handleKeyUp = () => {
    setIsTyping(false);
  };

  useEffect(() => {
    const typingSound = document.getElementById("typing-sound");

    if (isTyping) {
      typingSound.currentTime = 0;
      typingSound.play();
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isTyping]);

  /********************************* BackGound Sound Effect function ********************************************** */
  useEffect(() => {
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission from refreshing the page
    navigate("/chat", { state: { name } }); // navigate to "/chat" with the name data
  };

  return (
    <div>
      <audio id="background-music" loop onLoad={() => {}}>
        <source src={BackGround} type="audio/mpeg" />
      </audio>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row mb-4">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.2, y: 20 }}
            className="col-12"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcom To Taco-Chat
          </motion.h1>
        </div>
        <div className="row">
          <p
            style={{
              color: "white",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Plaese Enter Your Names
          </p>
        </div>
        <audio id="typing-sound" src={typing} />

        <form onSubmit={handleSubmit}>
          <motion.input
            type="text"
            value={name}
            dir="auto"
            style={{
              borderRadius: "7px",
              border: "none",
              padding: "10px",
              fontSize: "18px",
              fontWeight: "600",
              color: "#583C87",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
            whileHover={{ scale: 1.2, y: 20 }}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
