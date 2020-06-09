import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
    /* jshint ignore:start */
    <input
        className = "search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
    /* jshint ignore:end */
 );
