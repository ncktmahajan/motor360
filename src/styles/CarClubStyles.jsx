import styled from "styled-components";
import BlueTick from "../assets/bluetick.svg";

export const Container = styled.div`
  background-color: #171717;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  padding: 0 300px;
  margin-bottom: 2rem;
  color: #d4d4d4;

  @media (max-width: 1024px) {
    padding: 0 150px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    font-size: 16px;
  }
`;

export const CardGrid = styled.div`
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Ensure cards wrap when space is limited */

  > div {
    flex: 1;
    max-width: calc(33.33% - 20px);

    @media (max-width: 1024px) {
      max-width: calc(50% - 20px);
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Ensure single-column alignment */
  }
`;

export const CardGrids = styled.div`
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Ensure cards wrap when space is limited */

  > div {
    flex: 1;
    max-width: calc(25% - 20px);

    @media (max-width: 1024px) {
      max-width: calc(33.33% - 20px);
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Ensure single-column alignment */
  }
`;

export const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  width: 89%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

export const Icon = styled.div`
  width: 42px;
  height: 42px;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CardContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #d4d4d4;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${BlueTick});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
