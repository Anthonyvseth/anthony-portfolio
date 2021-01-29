import React from 'react'
import {
    SkillContainer, SkillH1, SkillWrapper
} from './SkillsElems'
const SkillSection = ({ id }) => {
    return (
        <SkillContainer id={id}>
            <SkillWrapper>
                <SkillH1>Skills</SkillH1>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default SkillSection
