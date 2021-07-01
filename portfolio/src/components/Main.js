import React from 'react'
import Typewriter from 'typewriter-effect'

//**************************************************************************

const options = {
    strings: [
        'Software developer', 
        'Full-stack developer',
        'Sports fan'
    ],
    autoStart: true,
    loop: true,
}

//**************************************************************************

const Main = () => {
    return (
        <main style={{ maxWidth: "2200px", height: "4000px" }}>
            <h1>
                Hello World! I am Jesus, a 
                <Typewriter options={ options } />    
            </h1>
        </main>
    )
}

//**************************************************************************

export default Main