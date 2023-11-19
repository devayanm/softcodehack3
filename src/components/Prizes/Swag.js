import React, { useState } from "react";
import list from "./SwagList";

const Swag = () => {
  const [show, setShow] = useState({});

  function dropDown(object) {
    const updatedShow = { ...show };

    list.forEach((element, key) => {
      updatedShow[key] = element === object ? !show[key] : false;
    });

    setShow(updatedShow);
  }

  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center gap-4 p-8">
      {list.map((element, index) => (
        <div className="col-span-6 flex flex-col" key={index}>
          <button
            className="bg-white border-[1px] border-gray-300 p-4 rounded-md shadow-lg transition hover:scale-90 delay-50 duration-1000 text-left"
            onClick={() => dropDown(element)}
          >
            {element.name}
          </button>

          <div
            style={{
              display: show[index] ? "block" : "hidden",
              opacity: show[index] ? 1 : 0,
              transition: "opacity ease-in-out 3s",
              backgroundColor: "black",
              color: "white",
              padding: "12px",
              borderRadius: "20px",
            }}
          >
            Hello World
          </div>
        </div>
      ))}
    </div>
  );
};

export default Swag;
