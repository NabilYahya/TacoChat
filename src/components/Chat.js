import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/home.scss";
export const Chat = (props) => {
  const location = useLocation();
  const name = location.state.name || "Test";
  const [typedName, setTypedName] = useState("");
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

      <div className="d-flex flex-column justify-content-center align-items-center">
        <motion.h1
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
            {typedName}
          </motion.span>
        </motion.h1>
      </div>
    </div>
  );
};
