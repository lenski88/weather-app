import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants/constants";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${COLORS.backgroundBody};
        color: ${COLORS.fontColor}
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;
