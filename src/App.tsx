import {ThemeProvider} from "styled-components";

import {GlobalStyle} from "./styles/global.ts";
import {defaultTheme} from "./styles/themes/default.ts";

import {Chat} from "./components/Chat";

import './styles/reset.css'


function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Chat />
        </ThemeProvider>
    )
}

export default App
