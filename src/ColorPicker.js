import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  const handlePaletteClick = () => {
    // Prevent the palette from closing when clicked
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="selected-color" style={{ backgroundColor: selectedColor }}>
        <button onClick={handleClick} className="pick-color-button">
          {selectedColor || 'Pick a color'}
        </button>
        {isOpen && (
          <ul className="color-palette" onClick={handlePaletteClick}>
            {colors.map((color) => (
              <div key={color} onClick={() => handleColorSelect(color)}>
                <li
                  style={{
                    backgroundColor: color,
                    width: '40px', // Increase the size of the color squares
                    height: '40px', // Increase the size of the color squares
                    cursor: 'pointer',
                  }}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
