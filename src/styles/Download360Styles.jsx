import styled, { keyframes } from "styled-components";
import AppStoreLogo from "../assets/apple.svg";
import PlayStoreLogo from "../assets/play-store.svg";

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  max-width: 40%;
  animation: ${floatAnimation} 3s infinite;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 1.5rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #333;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 0.8rem;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%230099ff" viewBox="0 0 24 24"><path d="M9 16.17l-3.59-3.58L4 14l5 5 12-12-1.41-1.41L9 16.17z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const AppStoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #3f3f3f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  gap: 0.8rem;

  strong {
    font-size: 1rem;
    display: block;
  }

  small {
    font-size: 0.8rem;
    color: #aaa;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const PlayStoreButton = styled(AppStoreButton)`
  background-color: #3f3f3f;
`;

export const ButtonIcon = styled.span`
  width: 24px;
  height: 24px;

  &.app-store-icon {
    background-image: url(${AppStoreLogo});
  }

  &.play-store-icon {
    background-image: url(${PlayStoreLogo});
  }

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NotificationForm = styled.div`
  margin-top: 20px;

  .form-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffff;
    width: 50%;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    text-align: start;
    color: #333;
    width: 100%;
  }

  .inline-input {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .form-box {
      padding: 15px;
      width: 93%;
    }

    .inline-input {
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const NotifyButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PlaceholderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh; /* Full viewport height */
  background-color: #f0f0f0;
  border-radius: 8px;

  img {
    max-width: 100%; /* Ensures the image doesn't exceed container width */
    max-height: 100%; /* Ensures the image doesn't exceed container height */
    object-fit: contain; /* Maintains the aspect ratio */
  }

  @media (max-width: 768px) {
    width: 295%;
    height: 40vh; /* Still takes up full viewport height on smaller screens */
  }

  @media (max-width: 480px) {
    width: 220%;
    height: 40vh;
  }

  @media (max-width: 320px) {
    
  }
`;

