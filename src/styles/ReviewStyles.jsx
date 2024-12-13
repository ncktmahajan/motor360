import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 40px 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 15px;
  }
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const TestimonialCard = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;

  @media (max-width: 768px) {
    width: 250px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

export const UserName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const UserRole = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Stars = styled.div`
  color: #ffd700;
  margin-bottom: 10px;
`;

export const TestimonialText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Stat = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    width: 250px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

export const StatNumber = styled.h2`
  font-size: 2rem;
  margin-bottom: 5px;
  color: #38bdf8;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const StatLabel = styled.p`
  font-size: 0.9rem;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const JoinButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  margin-top: 10px;
  padding: 15px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
`;
