import React from "react";
import messages from "../messages-utils";

const GameMessage = props => (
    <p>{messages[props.status]}</p>
);

export default GameMessage;