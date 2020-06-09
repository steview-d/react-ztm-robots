import React from "react";

import "./card.styles.css";

export const Card = (props) => (
    /* jshint ignore:start */
    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${
                props.monster.id * 7
            }?set=set1&size=180x180&bgset=bg2`}
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
    /* jshint ignore:end */
);
