import { createGlobalStyle } from "styled-components"

//**************************************************************************

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${props => props.theme.background };
        color: ${props => props.theme.text };
    }
    
    html {
        transition: background-color 0.2s ease-in;
        transition: color 0.2s;
    }
`

const baseTheme = {
    break: '800px'
}

const lightTheme = {
    ...baseTheme,
    primary: 'red',
    secondary: 'red',
    error: 'red',
    warning: 'red',
    info: 'red',
    success: 'red',
    text: '#23252F',
    background: 'white',
}

const darkTheme = {
    ...baseTheme,
    primary: 'black',
    secondary: 'red',
    error: 'red',
    warning: 'red',
    info: 'red',
    success: 'red',
    text: 'white',
    background: '#23252F',
}

//**************************************************************************

export {
    GlobalStyle,
    lightTheme, 
    darkTheme
}