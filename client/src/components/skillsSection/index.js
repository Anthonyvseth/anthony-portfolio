import React from 'react'
import {
    SkillContainer, SkillH1, SkillH2, SkillWrapper, SkillCard
} from './SkillsElems'
import { 
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiGithub,
    SiPython,
    SiReact,
    SiPostgresql,
    SiNpm,
    SiFirebase,
    SiMongodb,
    SiRedux
 } from "react-icons/si";

const SkillSection = ({ id }) => {
    return (
        <SkillContainer id={id}>
        <SkillH1>Skills</SkillH1>
            <SkillWrapper>
                <SkillCard>
                    <SkillH2 > <SiHtml5 style={{color: '#ff6e40'}}/> </SkillH2>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiCss3 style={{color: '#1e88e5'}}/> </SkillH2>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiJavascript style={{color: '#ffeb3b'}}/> </SkillH2>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiGithub style={{color: '#8e24aa'}} /> </SkillH2>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiPython style={{color: '#40c4ff'}} /> </SkillH2>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiReact style={{color: '#40c4ff'}} /> </SkillH2>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiPostgresql style={{color: '#40c4ff'}} /> </SkillH2>
                </SkillCard>
                <SkillCard>
                <SkillH2> <SiNpm style={{color: '#40c4ff'}} /> </SkillH2>
                </SkillCard>
                <SkillCard>
                <SkillH2> <SiFirebase style={{color: '#40c4ff'}} /> </SkillH2>
                </SkillCard>
                <SkillCard>
                <SkillH2> <SiMongodb style={{color: '#40c4ff'}} /> </SkillH2>
                </SkillCard>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default SkillSection
