import React, { useState, useRef, useEffect  } from 'react'
import { useDispatch } from 'react-redux'

import { setHeaderHeight } from '../actions/ui'

import NavBar from './nav/NavBar'
import StickyCentered from '../styles/components/Header/StickyCentered'

//**************************************************************************

const Header = () => {
    const dispatch = useDispatch()
    const [ shadow, setShadow ] = useState( false )
    const headerDOM = useRef( null )
    
    const handleScroll = () => {
        setShadow( window.scrollY > 0 )
    }   

    useEffect( () => {

        if ( headerDOM.current !== null ) {
            const height = headerDOM.current.offsetHeight || 60
            dispatch( setHeaderHeight( height ) ) 
        }

    }, [ headerDOM ])
    
    window.addEventListener( 'scroll', handleScroll )

    return (
        <StickyCentered shadow={ shadow } ref={ headerDOM } >
            <NavBar/>
        </StickyCentered>
    )
}

//**************************************************************************

export default Header