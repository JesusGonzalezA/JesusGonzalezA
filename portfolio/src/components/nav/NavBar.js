import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DarkModeToggle from "react-dark-mode-toggle";

import { routes } from '../../routes/routes'
import { LiLink } from './LiLink'
import { Burger } from './Burger'

import { Nav, Ul } from '../../styles/components/Header/Nav/NavBar'
import { setBurgerMenuState, toggleTheme } from '../../actions/ui'
  
//**************************************************************************

const NavBar = () => {

    const { isBurgerMenuOpened, dark } = useSelector( state => state.ui )
    const dispatch = useDispatch()
    
    const closeBurgerMenu = () => {
        dispatch( setBurgerMenuState( false ) )
    }

    const toggleDarkMode = () => {
        dispatch( toggleTheme() )
    }

    return (
        <Nav>
            <DarkModeToggle
                onChange={ toggleDarkMode }
                checked={ dark }
                size={ 80 }
                className="z-index-1"
            />
            <Burger />
            <Ul isOpened={ isBurgerMenuOpened } >
                {   
                    routes.map( ( route ) => (
                        <LiLink 
                            onClick= { closeBurgerMenu }
                            key={ route.path } 
                            path={ route.path } 
                            name={ route.name } 
                            outlined={ route.outlined }
                            external={ route.external }
                        />
                    ))
                }
            </Ul>
        </Nav>
    )
}

//**************************************************************************

export default NavBar