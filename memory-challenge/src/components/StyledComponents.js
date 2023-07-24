import { Box } from "@mui/material";
import styled from "@emotion/styled"

const BorderedBox = styled(Box)({
    border: 'thin solid grey',
    lineHeight: '0'
})

const GameContainer = styled(Box)({
    maxWidth: '1000px',
    margin: '5% auto'
})

const StyledCell = styled(Box)({
    border: 'thin solid gray',
    display: 'inline-block',
    height: '80px',
    maxHeight: '15vh'
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Message = styled(Box)({
    flex: '1',
    textAlign: 'left'
})

const Timer = styled(Box)({
    flex: '1',
    textAlign: 'center'
})

const Button = styled(Box)({
    flex: '1',
    textAlign: 'right',
    marginTop: '0.5rem'
})

const BoxSizeReset = styled.div`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`

export { BorderedBox, GameContainer, StyledCell, Footer, Message, Button, Timer, BoxSizeReset }