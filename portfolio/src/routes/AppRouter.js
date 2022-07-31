import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { darkTheme, GlobalStyle, lightTheme } from '../styles/Theme'

import Home from "../pages/Home"

//**************************************************************************

const AppRouter = () => {

    const { dark : isDarkThemeActive } = useSelector( state => state.ui );

    return (
        <ThemeProvider theme={ ( isDarkThemeActive) ? darkTheme : lightTheme } >
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        component={ Home } 
                    />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

//**************************************************************************

export default AppRouter