import React from 'react'
import { NavHashLink as Link } from 'react-router-hash-link'
import styled from 'styled-components'

import { FaArrowUp } from 'react-icons/fa'

//**************************************************************************

const StyledWrapper = styled.div`
    padding: 15px;
    border: 1px solid white;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;

    @media (max-width: ${ props => props.theme.break }) {
        margin-left: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 10px;
    }

    &:hover {
        color: #222130;
        background-color: white;
    }
`

//**************************************************************************

export default function ScrollToTop() {
  
    const scrollSmooth = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }

    return (
        <StyledWrapper>
            <Link 
                to='/#home'    
                scroll={ scrollSmooth }
            >
                <FaArrowUp style={{ marginRight: '10px' }} />
                Scroll to top
            </Link>
        </StyledWrapper>
    )
}