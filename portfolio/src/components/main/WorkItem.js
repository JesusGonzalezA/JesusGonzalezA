import React from 'react'
import styled from 'styled-components'

import { FaGithub } from 'react-icons/fa'

//**************************************************************************

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    margin-right: 10px;
    box-shadow: 0px 0px 4px 2px ${ props => props.theme.shadow }, 0 4px 4px 0 ${ props => props.theme.shadow };
    border-radius: 10px;
    margin-top: 30px;

    @media (max-width: ${ props => props.theme.break }) {
        flex-direction: column;
        width: 100%;
    }
`

const FlexRowLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Image = styled.img`
    width: 50%;
    height: auto;
    max-height: 300px;
    object-fit: contain;
    border-radius: 10px 0px 0px 10px;

    @media (max-width: ${ props => props.theme.break }) {
        border-radius: 10px 10px 0px 0px;
        width: 100%;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    margin: 20px;
    text-align: left;
    
    @media (max-width: ${ props => props.theme.break }) {
        width: 80%;
    }
`

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    background: ${ props => props.theme.gradient };
    color: ${ props => props.theme.text_primary };
    margin-top: 10px;

    &:hover{
        transform: scale(1.01);
    }
`

const StyledLinkOutlined = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px;
    border: solid 1px ${ props => props.theme.text };
    border-radius: 10px;
    margin-top: 10px;

    &:hover{
        transform: scale(1.01);
    }
`
//**************************************************************************

export const WorkItem = ({ 
    urlGithub, 
    urlLive, 
    imgSRC, 
    title, 
    description 
}) => {
    return (
        <FlexRow>
            <Image src={ imgSRC } alt={ title } />
            <Info>
                <p className="mid-font">{ title }</p>
                <p className="mttt mbbb">{ description }</p>
                <FlexRowLinks>
                    {
                        urlLive &&
                        <StyledLink className="mrrr" href={ urlLive } target="_blank">
                                Live version
                            </StyledLink>
                    }
                    <StyledLinkOutlined href={ urlGithub } target="_blank">
                        <FaGithub className="mrrr" />
                        View on Github
                    </StyledLinkOutlined>
                </FlexRowLinks>
            </Info>
        </FlexRow>
    )
}
