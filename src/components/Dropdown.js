import React from 'react';
import Select from "react-select";

const Dropdown = ({ options, handleChange }) => {
    return (
        <div className="container">
            <Select options={options} onChange={handleChange} />
        </div>
    );
}

export default Dropdown;