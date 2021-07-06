import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled, { ThemeContext } from 'styled-components'
import Swal from 'sweetalert2'

import { HiOutlineMailOpen } from "react-icons/hi"
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import StyledWrapper from '../styles/components/Contact/StyledWrapper.js'

//**************************************************************************

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(280px + 0.15vw);
    justify-content: space-around;
    margin-bottom: 10px;
`

//**************************************************************************

export const Contact = ({ 
    light    = false,
    email    = "jesusgranada99@gmail.com",
    twitter  = "https://twitter.com/JesusGonADev",
    linkedin = "https://www.linkedin.com/in/jesusgonzalezalvarez/",
    github   = "https://github.com/JesusGonzalezA"
}) => {
    
    // Icons
    const themeContext = useContext(ThemeContext)
    const iconSize = 32
    const iconColor = ( !light ) ? themeContext.text : 'white'

    // Copy email to clipboard
    const [ hovered, setHovered ] = useState( false )

    const toggleWrapper = () => {
        setHovered( !hovered )
    }

    const showMessage = () => {
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Copied',
            showConfirmButton: false,
            timer: 1500
        })  
    }

    return (
        <FlexColumn>
            <FlexRow>
                <a href={ twitter } target="_blank" rel="noopener noreferrer">
                    <FaTwitter 
                        className="fa-icon"
                        size={ iconSize }
                        color={ iconColor }
                        title='Twitter'
                    /> 
                </a>
                <a href={ linkedin } target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn 
                        className="fa-icon"
                        size={ iconSize }
                        color={ iconColor }
                        title='LinkedIn'
                    /> 
                </a>
                <a href={ github } target="_blank" rel="noopener noreferrer">
                    <FaGithub 
                        className="fa-icon"
                        size={ iconSize }
                        color={ iconColor }
                        title='Github'
                    />
                </a>
            </FlexRow>

            <StyledWrapper 
                onMouseEnter={ toggleWrapper } 
                onMouseLeave={ toggleWrapper } 
            >
                { hovered
                    ?  
                        <CopyToClipboard text={ email } onCopy={ showMessage }>
                            <p>Click to copy to clipboard</p>
                        </CopyToClipboard>
                    : 
                        <p> 
                            <HiOutlineMailOpen /> { email }
                        </p>
                }
            </StyledWrapper>
        </FlexColumn>
    )
}
