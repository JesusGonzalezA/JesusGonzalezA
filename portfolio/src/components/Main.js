import React from 'react'
import { Home } from './main/Home'
import { Skills } from './main/Skills'
import { Work } from './main/Work'
import { ContactMe } from './main/ContactMe'

//**************************************************************************

const Main = () => {
    return (
        <main style={{ maxWidth: "2200px"}}>
            <Home />
            <Skills />
            <Work />
            <ContactMe />
        </main>
    )
}

//**************************************************************************

export default Main