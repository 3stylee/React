import React from "react";
import messages from "../messages-utils";

const GameMessage = props => (
    <h1>{messages[props.status]}</h1>
);

export default GameMessage;