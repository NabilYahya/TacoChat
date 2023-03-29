import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { color, motion } from "framer-motion";
import "./style/home.scss";
import axios from "axios";
// import { Button } from "bootstrap";
import SendIcon from "@mui/icons-material/Send";

export const Chat = (props) => {
  const location = useLocation();
  const name = location.state.name || "Test";
  const [typedName, setTypedName] = useState("");
  const [showHelpMessage, setShowHelpMessage] = useState(false);
  const [showInpu, setShowInpu] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showresponse, setShowresponse] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setresponse] = useState("");

  // *************** Timers ********************
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelpMessage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInpu(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowresponse(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // *************** Render Name Animation ********************
  useEffect(() => {
    const nameLength = name.length;
    let index = 0;
    console.log(nameLength);
    const typingInterval = setInterval(() => {
      setTypedName((prevTypedName) => {
        const newTypedName = prevTypedName + name.charAt(index);
        console.log(newTypedName, "a");
        return newTypedName;
      });
      index++; // Increment after adding the character
      if (index === nameLength) {
        clearInterval(typingInterval);
      }
      console.log(index, "s");
    }, 200);

    return () => clearInterval(typingInterval);
  }, [name]);

  useEffect(() => {
    const welcome = "Welcom How can i help";
    const nameLength = welcome.length;
    let index = 0;
    console.log(nameLength);
    const typingInterval = setInterval(() => {
      setTypedName((prevTypedName) => {
        const newTypedName = prevTypedName + name.charAt(index);
        console.log(newTypedName, "a");
        return newTypedName;
      });
      index++; // Increment after adding the character
      if (index === nameLength) {
        clearInterval(typingInterval);
      }
      console.log(index, "s");
    }, 200);

    return () => clearInterval(typingInterval);
  }, [name]);

  // *************** API ********************
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => {
        setresponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(response);
  return (
    <div>
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
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <motion.h1
            whileHover={{ scale: 1.2, y: 20 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: "200px",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcome to the chat{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span>Welcome to the chat {typedName}</span>
            </motion.span>
          </motion.h1>
          {showHelpMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                marginTop: "50px",
              }}
            >
              How can I help?
            </motion.p>
          )}
          {showInpu && (
            <motion.textarea
              type="textarea"
              dir="auto"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2, y: 20 }}
              style={{
                color: "#583C87",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                marginTop: "50px",
                width: "70%",
              }}
            />
          )}
          {showButton && (
            <motion.Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "#583C87",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                marginTop: "50px",
                width: "70%",
              }}
            >
              Send
            </motion.Button>
          )}
          {showresponse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p
                style={{ color: "white", marginTop: "40px", fontSize: "20px" }}
              >
                {response}
              </p>
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
};
