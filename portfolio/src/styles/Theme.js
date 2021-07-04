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

    .fa-icon:hover {
        color: ${props => props.theme.primary } !important;
    }

    .big-font {
        font-size: calc(64px + 0.15vw);
        font-weight: bolder;
        background: linear-gradient(to right, ${props => props.theme.primary }, ${props => props.theme.secondary });
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .underlined {
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.primary }; 
    }
    
    @media (max-width: 1250px) {
        .big-font {
            font-size: calc(48px + 0.15vw);
        }
    } 
`

const baseTheme = {
    break: '1250px',
    primary: '#8e2de2',
    secondary: '#6396D8',
    gradient: 'linear-gradient(to right, #8e2de2, #6396D8);',
    text_primary: 'white',
}

const lightTheme = {
    ...baseTheme,
    error: 'red',
    warning: 'red',
    info: 'red',
    success: 'red',
    text: '#222130',
    background: 'white',
}

const darkTheme = {
    ...baseTheme,
    error: 'red',
    warning: 'red',
    info: 'red',
    success: 'red',
    text: 'white',
    background: '#222130',
}

//**************************************************************************

export {
    GlobalStyle,
    lightTheme, 
    darkTheme
}