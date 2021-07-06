import React from 'react'
import { Home } from './main/Home'
import { Skills } from './main/Skills'
import { Work } from './main/Work'

//**************************************************************************

const Main = () => {
    return (
        <main style={{ maxWidth: "2200px"}}>
            <Home />
            <Skills />
            <Work />
        </main>
    )
}

//**************************************************************************

export default Main