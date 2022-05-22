import React, { useEffect, useState } from "react";
import Part from "../Part/Part";
import Purchase from "../../Pages/Purchase/Purchase";

const Parts = () => {
  const [parts, setParts] = useState([]);
  const [bookingParts, setBookingParts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mb-32">
        {parts.map((part) => (
          <Part key={part.id} part={part} setBookingParts={setBookingParts}></Part>
        ))}
      </div>
      {/* {
         bookingParts && <Purchase bookingParts={bookingParts} setBookingParts={setBookingParts}></Purchase>
      } */}
    </div>
  );
};

export default Parts;
