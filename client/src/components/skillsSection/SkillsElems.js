import styled from 'styled-components';


export const SkillContainer = styled.div`
  height: 900px;
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? 'transparent' : '#030029')};
  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 100%);
    display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    height: 100vh;
  }
`;

export const SkillH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 100px;
padding: 0 50px;

@media screen and (max-width: 700px) {
  grid-template-columns: 1fr 1fr;
}

`;

export const SkillCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  max-height: 10px;
  max-width: 40%;
  padding: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  z-index: 0;

  @media screen and (max-width: 700px) {
    max-width: 360px;
  }

  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
  
  &:hover {
    transform: scale(.9);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillH2 = styled.h1`
font-size: 4rem;
color: #fff;
margin-bottom: 1px;

@media screen and (max-width: 1000px) {
  font-size: 4rem;
}

@media screen and (max-width: 700px) {
  font-size: 3rem;
}
`;

export const SkillH3 = styled.h1`
font-size: 1rem;
color: #fff;
margin-bottom: 1px;

@media screen and (max-width: 1000px) {
  font-size: .8rem;
}

@media screen and (max-width: 700px) {
  font-size: .6rem;
}
`;
