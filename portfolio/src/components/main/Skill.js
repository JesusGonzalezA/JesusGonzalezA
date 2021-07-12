import React from 'react'
import styled from 'styled-components'

//**************************************************************************

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    width: 300px;    
    margin-right: 40px;
    margin-top: 40px;
    padding: 20px;

    border-radius: 20px;

    box-shadow: 0px 0px 2px 1px ${ props => props.theme.shadow }, 0 2px 2px 0 ${ props => props.theme.shadow };

    @media (max-width: ${ props => props.theme.break }) {
        margin-right: 0px;
    } 
`

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 15px;
`
      
//**************************************************************************

export const Skill = ({ title, Icon, technologies }) => {
    
    return (
        <Wrapper>
            { Icon }
            <div style={{ textAlign: 'right' }}>
                <Title>{ title }</Title> 
                <div>
                    <ul style={{ listStyleType: 'none' }}>
                        { 
                            technologies.map( ( tech ) => (
                                <li 
                                key={ tech } 
                                style={{ padding: '5px' }}
                                >
                                    { tech }
                                </li>
                            ))
                        }
                    </ul> 
                </div>
            </div>
        </Wrapper>
    )
}
