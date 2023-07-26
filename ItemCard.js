import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import { ICard } from "./StyledComponents";

const ItemCard = (props) => (
    <ICard color={props.color}>
        <CardHeader 
            title={props.data.wrapperType !== 'artist' 
            ? props.data.collectionName 
            : props.data.artistName}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          Artist: {props.data.artistName}, Media Type: 
          {props.data.wrapperType === 'collection' 
          ? ("album") 
          : props.data.wrapperType}
        </Typography>
      </CardContent>
    </ICard>
)

export default ItemCard;