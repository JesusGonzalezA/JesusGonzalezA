import React, { useState } from 'react'
import StickyCentered from '../styles/components/Header/StickyCentered'

import NavBar from './nav/NavBar'

//**************************************************************************

const Header = () => {
    const [ shadow, setShadow ] = useState( false )
    
    const handleScroll = () => {
        setShadow( window.scrollY > 0 )
    }
    
    window.addEventListener( 'scroll', handleScroll )

    return (
        <StickyCentered shadow={ shadow } >
            <NavBar/>
        </StickyCentered>
    )
}

//**************************************************************************

export default Header