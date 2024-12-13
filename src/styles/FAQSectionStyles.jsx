import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const FAQList = styled.div`
  text-align: left;
`;

export const FAQItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Question = styled.div`
  font-size: 1rem;
  font-weight: 500;
  padding: 15px;
  background: #f9fafc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f3f6;
  }
`;

export const ToggleIcon = styled.span`
  font-size: 1.2rem;
  color: #888;
  font-weight: lighter;
`;

export const Answer = styled.div`
  font-size: 0.95rem;
  background: #ffffff;
  padding: 15px 20px;
  border-top: 1px solid #e0e0e0;
  color: #555;
`;

export const ContactSupport = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const SupportText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 15px;
`;

export const SupportButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 15px 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0040b3;
    transform: scale(1.05);
  }
`;
