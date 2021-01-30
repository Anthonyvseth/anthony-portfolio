import styled from 'styled-components';


export const SkillContainer = styled.div`
  margin-top: 20px;
  height: 100vh;
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? 'transparent' : '#030029')};
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 49%, 0 8%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 10vw 0;
  }
`;

export const SkillWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const SkillH1 = styled.h1`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;