import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
  padding: 50px 150px;

  @media (max-width: 1024px) {
    padding: 40px 80px;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 0 250px;

  h1 {
    font-size: 38px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const CombinedCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  gap: 20px;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Section = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    margin-top: 5px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const Input = styled.input`
  width: 97%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 97%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 20px;
  }
`;

export const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .side-by-side {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const StatusItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const NextServiceDueBox = styled(StatusItem)`
  background-color: #dfffe0;

  h3 {
    color: #28a745;
  }

  p {
    color: #28a745;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  svg {
    width: 3rem;
    height: 3rem;

    @media (max-width: 768px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const FeatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FeatureCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;

  h3 {
    font-size: 1.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
