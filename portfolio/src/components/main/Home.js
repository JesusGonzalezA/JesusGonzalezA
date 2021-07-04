import React from 'react'
import { useSelector } from 'react-redux'

import Typewriter from 'typewriter-effect'

import { FullPage, FlexColumn, MainPhoto } from '../../styles/components/Main/FullPage'
import Title from '../../styles/components/Main/Title'
import { Contact } from '../Contact'

import photo from '../../assets/Photo.png'

//**************************************************************************

const options = {
    strings: [
        'Software developer', 
        'Full-stack developer',
        'Sports fan'
    ],
    autoStart: true,
    loop: true,
    wrapperClassName: 'big-font',
    cursorClassName: 'big-font'
}

//**************************************************************************

export const Home = ( { imgUrl = photo, name = "Jesus Gonzalez" } ) => {
    const { headerHeight } = useSelector(state => state.ui)

    return (
        <FullPage cut={ headerHeight } id="home">
            <FlexColumn>
                <MainPhoto
                    src={ imgUrl } 
                    alt="Photo of me"
                />

                <Title className="big-font">
                    I am { name }, a   
                    <Typewriter options={ options } />    
                </Title>
            </FlexColumn>

            <Contact />

        </FullPage>
    )
}
