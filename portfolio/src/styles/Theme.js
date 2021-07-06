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
        font-size: calc(72px + 0.15vw);
        font-weight: bolder;
        
        background: ${props => props.theme.big_font };
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .big {
        font-size: calc(72px + 0.15vw);
        font-weight: bolder;
    }

    footer {
        background-color: #222130;
        color: white;
    }
    
    @media (max-width: 1250px) {
        .big-font {
            font-size: calc(48px + 0.15vw);
        }

        .big {
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
    big_font: baseTheme.gradient,
    big_font_underlined: baseTheme.primary,
    error: 'red',
    warning: 'red',
    info: 'red',
    success: 'red',
    text: '#222130',
    shadow: 'rgba(34, 33, 49, 0.27)',
    background: 'white',
}

const darkTheme = {
    ...baseTheme,
    big_font: 'white',
    big_font_underlined: 'white',
    error: 'red',
    warning: 'red',
    info: 'red',
    success: 'red',
    text: 'white',
    shadow: 'rgba(255, 255, 255, 0.35)',
    background: '#222130',
}

//**************************************************************************

export {
    GlobalStyle,
    lightTheme, 
    darkTheme
}