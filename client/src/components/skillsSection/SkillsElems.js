import styled from 'styled-components';


export const SkillContainer = styled.div`
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? 'transparent' : '#030029')};
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 49%, 0 8%);

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SkillWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SkillH1 = styled.h1`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;