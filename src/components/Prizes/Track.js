import React from "react";

const Track = () => {
  const list = [
    {
      name: "Best Beginner Hack",
      prizeList: [
        "3000 cash worth prizes",
        "3000 cash worth prizes",
        "3000 cash worth prizes",
      ],
    },
    {
      name: "Best Beginner Hack",
      prizeList: [
        "3000 cash worth prizes",
        "3000 cash worth prizes",
        "3000 cash worth prizes",
      ],
    },
    {
      name: "Best Beginner Hack",
      prizeList: [
        "3000 cash worth prizes",
        "3000 cash worth prizes",
        "3000 cash worth prizes",
      ],
    },
    {
      name: "Best Beginner Hack",
      prizeList: [
        "3000 cash worth prizes",
        "3000 cash worth prizes",
        "3000 cash worth prizes",
      ],
    },
    {
      name: "Best Beginner Hack",
      prizeList: [
        "3000 cash worth prizes",
        "3000 cash worth prizes",
        "3000 cash worth prizes",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 p-8 gap-8 h-128">
      {list.map((element, index) => (
        <div className="flex flex-col col-span-4 bg-white p-2 rounded-md shadow-lg">
          <div className="">
            <img
              src="https://www.forex.academy/wp-content/uploads/2019/12/Blockchain-1.jpg"
              className="w-fill h-fill rounded-sm"
            />
          </div>
          <div className="text-base font-semibold p-2">{element.name}</div>
          <div className="flex flex-col p-2">
            {element.prizeList.map((ele, index) => (
              <div className="text-xs font-extralight text-black">{ele}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Track;
