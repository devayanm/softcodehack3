import React, { useEffect, useState } from "react";
import Overall from "./Overall";
import Swag from "./Swag";
import Track from "./Track";

const Prizes = () => {
  const list = ["Prizes", "Swags for all", "Track Prizes"];
  const boolArray = Array(3).fill(false);
  boolArray[ 0 ] = true ;
  const [display, setDisplay] = useState(boolArray);
  const [body, setBody] = useState([]);

  function onClickHandler(val) {
    list.forEach((element, index) => {
      if (val === element) {
        const temp = Array(3).fill(false);
        temp[index] = true;
        setDisplay(temp);
        return;
      }
    });
    return;
  }

  useEffect(() => {
    setBody(display);
  }, [display]);

  const style = {
    textDecoration: "underline",
  };

  return (
    <div className="grid grid-cols-12 justify-center items-center p-32">
      <span className="col-span-12 text-5xl capitalize font-extralight text-center mb-8">
        Prizes
      </span>
      <div className="flex flex-col col-span-12 bg-gray-100 p-8 m-4 rounded-sm shadow-lg">
        <div className="flex col-span-12 border-b-[1px] border-gray-200">
          {list.map((element, index) => (
            <div
              className="col-span-3 text-base uppercase font-bold px-8 py-2 bg-transparent  hover:text-gray-700 cursor-pointer"
              style={
                (display[0] === true && index === 0) ||
                (display[1] === true && index === 1) ||
                (display[2] === true && index === 2)
                  ? style
                  : { backgroundColor: "transparent" }
              }
              onClick={() => onClickHandler(element)}
            >
              {element}
            </div>
          ))}
        </div>
        <div className="col-span-12">
          {body[0] ? <Overall /> : body[1] ? <Swag /> : <Track />}
        </div>
      </div>
    </div>
  );
};

export default Prizes;
