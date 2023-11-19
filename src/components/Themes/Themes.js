import React from 'react';

const themes = [
  { id: 1, name: 'Theme 1' },
  { id: 2, name: 'Theme 2' },
  { id: 3, name: 'Theme 3' },
  { id: 4, name: 'Theme 4' },
  { id: 5, name: 'Theme 5' },
  { id: 6, name: 'Theme 6' },
];

const Themes = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-20">
      <div className="flex items-center justify-center">
        <div className="w-96 h-96 relative">
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">Themes</div>
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{
                transform: `rotate(${index * (360 / themes.length)}deg) translateY(-280px) rotate(-${index * (360 / themes.length)}deg)`,
              }}
            >
              <div className="w-40 h-40 bg-gray-700 shadow-lg flex items-center justify-center text-center rounded-lg text-white border border-blue-500 transform transition-transform duration-500 hover:scale-110">
                {theme.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;