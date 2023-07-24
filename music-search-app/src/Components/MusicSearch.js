import React from "react";
import { CenteredBox, AppContainer, TitleBanner } from "./StyledComponents";
import { Typography } from "@mui/material";

const useMusicSearch = () => {
    // hook content
}

const MusicSearch = () => {
    return (
        <>
            <TitleBanner>
                <Typography variant='h3' component='h3' mb={1}>Music Search App</Typography>
            </TitleBanner>
            <CenteredBox>
                <AppContainer>
                </AppContainer>
            </CenteredBox>
        </>
    )
}

export default MusicSearch;