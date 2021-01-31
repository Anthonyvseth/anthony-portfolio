import React from 'react'
import { 
    PortContainer,
    PortH1,
    PortCard,
    PortH2,
    PortP
 } from './PortfolioElems'

const Portfolio = ({ id }) => {
    return (
        <PortContainer id={id}>
            <PortH1>Portfolio</PortH1>
            <PortCard>
                <PortH2>Testing</PortH2>
                <PortP>testing</PortP>
            </PortCard>
        </PortContainer>
    )
}

export default Portfolio
