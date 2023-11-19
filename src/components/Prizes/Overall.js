import React, { useState } from "react";
import { ReactComponent as First } from "../../assets/winner.svg";
import { ReactComponent as Second } from "../../assets/second.svg";
import { ReactComponent as Third } from "../../assets/third.svg";

const Overall = () => {
  const [openModal, setOpenModal] = useState(false);
  const catalog = [
    {
      tag: First,
      prize: "$30 00",
    },
    {
      tag: Second,
      prize: "$20 00",
    },
    {
      tag: Third,
      prize: "$10 00",
    },
  ];
  const data = "2000 worth prizes";
  function modalPopup(val) {
    setOpenModal(true);
  }

  return (
    <div>
      {openModal ? (
        <div className="fixed left-[450px] w-[300px] grid grid-cols-5 justify-center items-center flex-col z-20 bg-white p-4 rounded-md">
          <div className="col-span-5 text-l font-semibold border-b-[1px] border-gray-100 p-2">
            Coming Soon
          </div>
          <div className="col-span-5 text-sm font-light p-2">{data}</div>
          <button
            className="col-start-5 bg-gray-200 rounded-full text-xs font-light p-2"
            onClick={() => setOpenModal(false)}
          >
            Okay
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="grid grid-cols-12 col-span-12 justify-center items-center gap-4 h-128">
        <div className="flex flex-col col-span-6 justify-center items-center">
          {catalog.map((element, index) => (
            <div className="grid grid-cols-12 col-span-5 justify-start items-center gap-4">
              <div className="col-span-3">
                {element.tag === First ? (
                  <First className="p-4" />
                ) : element.tag === Second ? (
                  <Second className="p-4" />
                ) : element.tag === Third ? (
                  <Third className="p-4" />
                ) : (
                  ""
                )}
              </div>
              <div className="col-span-9 text-xl text-whitesmoke font-semibold ml-16">
                {element.prize}
                <div className="font-light text-base">Worth Prizes</div>
                <button
                  className="font-extralight bg-gray-100 rounded-full text-black text-xs py-[2px] px-[5px] hover:bg-gray-300"
                  onClick={() => modalPopup(element)}
                >
                  Click to know more
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-6">
          <img
            src="https://electrothon.nith.ac.in/prize.png"
            alt=""
            className="w-fill h-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Overall;
