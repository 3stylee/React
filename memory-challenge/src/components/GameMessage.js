import React from "react";
import messages from "../messages-utils";
import { Typography } from "@mui/material";

const GameMessage = props => (
    <Typography component="p" mt={1}>{messages[props.status]}</Typography>
);

export default GameMessage;