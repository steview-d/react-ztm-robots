import React from "react";

import { Card } from '../card/card.component';

import "./card-list.styles.css";

export const CardList = (props) => {
    /* jshint ignore:start */
    // { props.children } is Whatever is put inside <CardList>
    // in .js file and can be called from here, inside the
    // component itself.
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} /> 
            ))}
        </div>
    );
    /* jshint ignore:end */
};
