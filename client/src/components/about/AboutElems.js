import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 1000px;
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? 'transparent' : '#030029')};
  clip-path: polygon(100% 0, 100% 50%, 100% 91%, 0 100%, 0 49%, 0 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

export const AboutRow = styled.div`
  display:flex;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 5px;
`;


export const Heading = styled.h1`

  margin-bottom: 50px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const ImgWrap = styled.div`
  max-width: 500px;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  padding-right: 0;
  clip-path: circle(50%)
`;
