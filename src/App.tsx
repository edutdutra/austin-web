import {ThemeProvider} from "styled-components";

import {GlobalStyle} from "./styles/global.ts";
import {defaultTheme} from "./styles/themes/default.ts";

import {Home} from "./pages/Home";

import './styles/reset.css'


function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Home />
        </ThemeProvider>
    )
}

export default App
