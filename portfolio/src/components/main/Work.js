import React from 'react'
import styled from 'styled-components'

import { WorkItem } from './WorkItem'

//**************************************************************************

const CenteredWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-between;
    width: 90%;
`

//**************************************************************************

export const Work = () => {
    return (
        <div style={{ textAlign: 'right' }} id="work">
            <h2 className="big-font">Work selection</h2>
            <p className="mid-font mttt">
                Selection of my main work as a developer and case studies.
            </p>

            <CenteredWrapper>
                <Wrapper>
                    <WorkItem 
                        title="Connect4"
                        description="3D web game. It is a project for the university in which, using pair programming, 
                        a friend of mine and me developed this game using ThreeJS library."
                        urlGithub="https://github.com/JesusGonzalezA/Connect4"
                        urlLive="https://jesusgonzaleza.github.io/Connect4/"
                        imgSRC={ `${process.env.PUBLIC_URL}/assets/work/connect4.png` }
                    />
                    <WorkItem 
                        title="Blog"
                        description="Hiking blog. I love nature and going hiking, so I decided to choose this theme for
                        my university project. It is a blog created using php, twig, mysql and vanilla javascript and css. It implements
                        session control, authorization and authentication, admin panel, search, etc."
                        urlGithub="https://github.com/JesusGonzalezA/Hiking-Blog"
                        imgSRC={ `${process.env.PUBLIC_URL}/assets/work/blog.png` }
                    />
                    <WorkItem 
                        title="EcoTravel"
                        description="My friends and I created this project in the university. We created this prototype after ux researching 
                        using AdobeXD. You can read our case study on Github"
                        urlGithub="https://github.com/JesusGonzalezA/DIU21"
                        urlLive="https://xd.adobe.com/view/33c4e3f8-e569-449f-adc6-9f347606e847-6697/?fullscreen"
                        imgSRC={ `${process.env.PUBLIC_URL}/assets/work/ecotravel.png` }
                    />
                    <WorkItem 
                        title="Game of life"
                        description="I loved studying logic and computation theory, so I created my version of 
                        the Game of life (popular cellular Turing complete automaton) using bootstrap, React and redux."
                        urlGithub="https://github.com/JesusGonzalezA/GameOfLife"
                        urlLive="https://jesusgonzaleza.github.io/GameOfLife/"
                        imgSRC={ `${process.env.PUBLIC_URL}/assets/work/gamelife.png` }
                    />
                    <WorkItem 
                        title="IOT Simulator"
                        description="Real-Time application to control your house state. It simulates how an IOT System app works. 
                        It was created using NodeJS, MongoDB and SocketIO."
                        urlGithub="https://github.com/JesusGonzalezA/IOT_System_Simulator"
                        imgSRC={ `${process.env.PUBLIC_URL}/assets/work/iot.png` }
                    />
                    <WorkItem 
                        title="Case Study: Yuzin"
                        description="Yuzin is a company from where I am, Granada, Spain. It is a newsletter where you can 
                        discover new events in the city. I made a redesign for a university project. You can check my case 
                        study on Github."
                        urlGithub="https://github.com/JesusGonzalezA/CaseStudy-Yuzin/blob/main/CaseStudy.md"
                        urlLive="https://github.com/JesusGonzalezA/CaseStudy-Yuzin/blob/main/CaseStudy.md"
                        imgSRC={ `${process.env.PUBLIC_URL}/assets/work/yuzin.png` }
                    />
                </Wrapper>
            </CenteredWrapper>
        </div>
    )
}
