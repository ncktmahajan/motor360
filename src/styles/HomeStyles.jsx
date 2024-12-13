import styled from 'styled-components';

//Hero Section
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  background-color: #171717;
  color: #fff;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const RightContent = styled.div`
   flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    text-align: center;
  }
`;

export const Title = styled.h1`
 font-size: 68px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  margin-top: 20px;
  line-height: 1.6;
  color: #d4d4d4;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PlaceholderImage = styled.div`
  width: 600px;
  height: 50px;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  position: absolute;
  bottom: 0;
  right: 50px;

  @media (max-width: 1024px) {
    width: 400px;
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 300px;
    position: static;
    margin-top: 20px;
  }
`;


//WhyChoose Section
export const PanelContainer = styled.div`
  padding: 40px 100px;
  background-color: #f9f9f9;
  text-align: center;
  color: #333;

  @media (max-width: 1024px) {
    padding: 30px 50px;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const PanelHeading = styled.div`

`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CardIcon = styled.div`
  width: 42px;
  height: 42px;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #555;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const WhyChooseSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const WhyChooseHeading= styled.div`
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;
  color: #333;

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`; 

export const WhyChooseCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  flex: 1;
  min-width: 250px;

  @media (max-width: 1024px) {
    min-width: 200px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    min-width: 180px;
    padding: 10px;
  }

  p {
    font-size: 16px;
    color: #555;

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;


export const WhyChooseTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CTAButton = styled.button`
  margin-top: 40px;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 15px 25px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;