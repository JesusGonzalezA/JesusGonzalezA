import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { routes } from '../../routes/routes'
import { LiLink } from './LiLink'
import { Burger } from './Burger'

import { Nav, RoundedPhoto, Ul } from '../../styles/components/Header/Nav/NavBar'
import { setBurgerMenuState } from '../../actions/ui'
  
//**************************************************************************

const NavBar = () => {

    const { isBurgerMenuOpened } = useSelector( state => state.ui )
    const dispatch = useDispatch()
    
    const closeBurgerMenu = () => {
        dispatch( setBurgerMenuState( false ) )
    }

    return (
        <Nav>
            <a 
                title="Go to my linkedin profile"
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jesusgonzalezalvarez/"
            >
                <RoundedPhoto 
                    alt="Photo of me" 
                    src={"https://media-exp3.licdn.com/dms/image/C4E03AQGwAVyCw8NMdA/profile-displayphoto-shrink_800_800/0/1575903667515?e=1629936000&v=beta&t=KxxcrRPoAgvYKOECBwa2EztrDvrtZVXZ5xVcNaawBgI"} 
                />
            </a>
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
                        />
                    ))
                }
            </Ul>
        </Nav>
    )
}

//**************************************************************************

export default NavBar