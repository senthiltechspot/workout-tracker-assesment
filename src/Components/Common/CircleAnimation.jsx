import React, { useState } from "react";
const cir = {
    height: "50px", width:"50px",
    borderRadius: "50px",
    borderStyle: "solid", borderColor: "green",
}
const CircleAnimation = () => {
  const [timer, setTimer] = useState(null);
  return (
    <div style={cir}>
      {/* Spinner animation */}
    </div>
  );
};

export default CircleAnimation;
