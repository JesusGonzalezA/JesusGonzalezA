import React from 'react'
import styled from 'styled-components'
import { ContactMe } from './main/ContactMe'
import ScrollToTop from './ScrollToTop'

//**************************************************************************

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
`
//**************************************************************************

const Footer = () => {
    return (
        <footer>
            <FlexRow>
                <h2 className="big" style={{ color: 'white' }}>Contact</h2>
                <ScrollToTop />
            </FlexRow>

            <p style={{ marginTop: '60px', marginBottom: '60px', fontSize: '1.5rem' }}>
                Let's share a coffee. I am looking forward to getting to meeting you!
            </p>

            <ContactMe light={ true } />
        </footer>
    )
}

//**************************************************************************

export default Footer