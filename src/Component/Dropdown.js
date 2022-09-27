import React from "react";
import { useState } from "react";

export default function Dropdown({ items }) {
  const [flag, setflag] = useState(false);
      
  return (
    <div>
      <button style={style.button} onMouseEnter={() => setflag(true)}>
        <span>Select</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/152/152415.png"
          alt="error"
          width="15rem"
        />
      </button>
      {flag && (
        <div style={style.listContainer}>
          {items.map((item, index) => (
            <li key={index} onClick={() => setflag(false)} style={style.li}>
              {item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
const style = {
    button: {
      width: "20rem",
      display: "flex",
      alignItems: "center",
      fontSize: "1.5rem",
      padding: "0.8rem 2rem",
      justifyContent: "space-between",
      border: "none",
      borderRadius: "6px",
        backgroundColor: "white",
    },
    listContainer: {
      marginTop: "0.2rem",
      width: "20rem",
      backgroundColor: "white",
      borderRadius: "6px",
      listStyle: "none",
      padding: "0.4rem 2rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.3rem",
      transition: "all 0.7s ease-in-out",
    },
    li: {
      paddingBottom: "0.6rem",
        cursor: "pointer",
        
    },
    
    
  };
