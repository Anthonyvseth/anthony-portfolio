import React from 'react'
import {
    SkillContainer, SkillH1, SkillH2, SkillH3, SkillWrapper, SkillCard
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
    SiRedux,
    SiNodeDotJs
 } from "react-icons/si";

const SkillSection = ({ id }) => {
    return (
        <SkillContainer id={id}>
        <SkillH1>Skills</SkillH1>
            <SkillWrapper>
                <SkillCard>
                    <SkillH2 > <SiHtml5 style={{color: '#ff6e40'}}/> </SkillH2>
                    <SkillH3  style={{color: '#ff6e40'}}>Html5</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiCss3 style={{color: '#1e88e5'}}/> </SkillH2>
                    <SkillH3 style={{color: '#1e88e5'}}>Css3</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiJavascript style={{color: '#ffeb3b'}}/> </SkillH2>
                    <SkillH3 style={{color: '#ffeb3b'}}>JavaScript</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiPython style={{color: '#4db6ac'}} /> </SkillH2>
                    <SkillH3 style={{color: '#4db6ac'}}>Python3</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiReact style={{color: '#40c4ff'}} /> </SkillH2>
                    <SkillH3 style={{color: '#40c4ff'}}>React</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiRedux style={{color: '#b388ff'}} /> </SkillH2>
                    <SkillH3 style={{color: '#b388ff'}}>Redux</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiFirebase style={{color: '#fbc02d'}} /> </SkillH2>
                    <SkillH3 style={{color: '#fbc02d'}} >Firebase</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiMongodb style={{color: '#9ccc65'}} /> </SkillH2>
                    <SkillH3 style={{color: '#9ccc65'}}>MongoDb</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiPostgresql style={{color: '#1565c0'}} /> </SkillH2>
                    <SkillH3 style={{color: '#1565c0'}} >Postgres </SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiNpm style={{color: '#ff5252'}} /> </SkillH2>
                    <SkillH3 style={{color: '#ff5252'}}>Npm</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiNodeDotJs style={{color: '#9ccc65'}} /> </SkillH2>
                    <SkillH3 style={{color: '#9ccc65'}}>NodeJs</SkillH3>
                </SkillCard>
                <SkillCard>
                    <SkillH2> <SiGithub style={{color: '#8e24aa'}} /> </SkillH2>
                    <SkillH3 style={{color: '#8e24aa'}}>GitHub</SkillH3>
                </SkillCard>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default SkillSection
