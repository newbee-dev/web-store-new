import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const SizeDropdown = ({ onSelect }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    onSelect(size);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Select Size
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSizeChange("Small")}>
          Small
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSizeChange("Medium")}>
          Medium
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSizeChange("Large")}>
          Large
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SizeDropdown;
