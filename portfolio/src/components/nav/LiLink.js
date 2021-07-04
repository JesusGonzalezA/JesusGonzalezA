import React from 'react'
import { useSelector } from 'react-redux';
import { NavHashLink as Link } from 'react-router-hash-link'

import { Li } from '../../styles/components/Header/Nav/NavBar'

//**************************************************************************

const scrollWithOffset = ( offset, el ) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -offset
    const top = yCoordinate + yOffset - 10

    window.scrollTo({ top, behavior: 'smooth' }); 
}

//**************************************************************************

export const LiLink = ( { path, name, ...rest } ) => {
    const { headerHeight } = useSelector(state => state.ui)

    return (
        <Li { ...rest }>
            <Link 
                to={ path }     
                smooth={ true } 
                scroll={ el => scrollWithOffset(headerHeight, el ) }
            >
                { name }
            </Link>
        </Li>
    )
}

//**************************************************************************
