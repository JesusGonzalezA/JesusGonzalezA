import React from 'react'
import styled from 'styled-components'

import { FiDatabase, FiSmartphone, FiTool, FiUsers } from 'react-icons/fi'
import { BiPaint, BiTestTube } from 'react-icons/bi'
import { Skill } from './Skill'

//**************************************************************************

const CenterWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-evenly;
`

//**************************************************************************

export const Skills = () => {

    const iconSize = 36

    return (
        <div id="skills">
            <h2 className="big-font">Skills</h2>
            <div>
                <p className="mid-font mttt">
                    I am a Junior Developer interested in Web and App development.
                    My vision in the field is to broaden my skills to help the 
                    customer the most. Creative and passionate, I take attention 
                    to small details.
                </p>
            </div>

            <CenterWrapper className="mttt">    
                <Wrapper>
                    <Skill
                        title="Frontend"
                        Icon={ <FiSmartphone size={ iconSize } /> }
                        technologies={[
                            'React',
                            'ThreeJS',
                            'Angular',
                            'Flutter',
                            'Bootstrap 5',
                        ]}
                    />
                    <Skill
                        title="Design"
                        Icon={ <BiPaint size={ iconSize } /> }
                        technologies={[
                            'Figma',
                            'Adobe XD',
                            'UI Design',
                            'UX Research'
                        ]}
                    />
                    <Skill
                        title="Backend"
                        Icon={ <FiTool size={ iconSize } /> }
                        technologies={[
                            'Express',
                            'Node JS',
                            'Ruby on Rails',
                            '.Net'
                        ]}
                    />
                    <Skill 
                        title="Databases"
                        Icon={ <FiDatabase size={ iconSize } /> }
                        technologies={[
                            'Normalization',
                            'SQL',
                            'MongoDB',
                            'Firebase'
                        ]}
                    />
                    <Skill 
                        title="Testing"
                        Icon={ <BiTestTube size={ iconSize } /> }
                        technologies={[
                            'Jest',
                            'Testing library',
                            'Flutter testing',
                            'Ruby on Rails testing'
                        ]}
                    />
                    <Skill  
                        title="Team"
                        Icon={ <FiUsers size={ iconSize } /> }
                        technologies={[
                            'Scrum',
                            'English',
                            'Spanish',
                            'Version control',
                            'Open minded',
                            'Creative',
                            'Leadership'
                        ]}
                    />
                </Wrapper>
            </CenterWrapper>
        </div>
    )
}
