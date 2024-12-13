import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  background-color: #171717;
  color: white;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 60px;
  padding: 0 400px;

  h1 {
    font-size: 38px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    color: #b0b0b0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 80px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const InfoCard = styled.div`
  flex: 1;
  background-color: #262626;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    margin: 5px 0;
    color: #b0b0b0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const InlineTextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  h2, h3, p {
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: ${({ size }) => size || '1.5rem'};
  line-height: 1;

  img {
    width: ${({ size }) => size || '1.5em'};
    height: ${({ size }) => size || '1.5em'};
  }

  @media (max-width: 768px) {
    font-size: ${({ size }) => size || '1.2rem'};

    img {
      width: ${({ size }) => size || '1.2em'};
      height: ${({ size }) => size || '1.2em'};
    }
  }
`;

export const TextWrapper = styled.div`
  p {
    margin: 0;
    font-size: 1rem;
    color: #b0b0b0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const BackgroundBox = styled.div`
  background-color: #333333;
  padding: 20px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.2rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SubBox = styled.div`
  background-color: #171717;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const DropdownBox = styled.div`
  background-color: #333333;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: #b0b0b0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  select {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #333;
    background-color: #1f1f1f;
    color: white;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 20px;
  padding: 20px 80px;

  @media (max-width: 1024px) {
    padding: 20px 40px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const FeatureCard = styled.div`
  flex: 1;
  background-color: #262626;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const CTAButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 15px 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
  }
`;
