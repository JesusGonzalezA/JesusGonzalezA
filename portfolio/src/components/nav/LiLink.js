import React from 'react'
import { Link } from 'react-router-dom'

import { Li } from '../../styles/components/Header/Nav/NavBar'

//**************************************************************************

export const LiLink = ( { path, name, ...rest } ) => {
    return (
        <Li { ...rest }>
            <Link to={ path }>
                { name }
            </Link>
        </Li>
    )
}

//**************************************************************************
