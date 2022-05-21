import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(()=>{
    fetch("parts.json")
    .then((res) => res.json())
    .then((data) => setParts(data));
  },[])
  return (
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mb-32">
      {parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
    </div>
  );
};

export default Parts;
