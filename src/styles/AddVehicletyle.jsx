import styled from 'styled-components';

export const Section = styled.section`
  background-color: #171717;
  padding: 60px 20px;
  color: #fff;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;


export const Container = styled.div`
  max-width: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px; /* Added for extra small screens */
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;


export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;


export const Header = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #c2c2c2;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const Form = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    align-self: flex-start;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: #c2c2c2;
    align-self: flex-start;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const Input = styled.input`
  background-color: #2e2e2e;
  color: #fff;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;

  &::placeholder {
    color: #888;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 280px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 800px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 15px; /* Added for extra small screens */
    font-size: 0.8rem;
  }
`;

export const Example = styled.small`
  font-size: 0.8rem;
  color: #888;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem; /* Added for extra small screens */
  }
`;

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const Card = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #444;
  display: flex;
  gap: 10px;
  min-width: 300px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #2e2e2e;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px; /* Added for extra small screens */
    height: 35px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #c2c2c2;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

//Remenrder Section
export const RemindersSection = styled.div`
  margin-top: 50px;
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;


    export const ReminderCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
  
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }
  
    @media (max-width: 480px) {
      gap: 10px; /* Added for extra small screens */
    }
  `;

  export const PReminderCard = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #90ee90, #ffffff);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 15px;
    max-width: 93%; /* Ensure it spans the full width */
    text-align: center; /* Center text content */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reduced padding for extra small screens */
  }

  div {
    margin-left: 15px;
    text-align: left;

    @media (max-width: 768px) {
      margin-left: 0; /* Center the content */
    }
  }
`;


export const ReminderCard = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #add8e6, #ffffff);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 15px;
    max-width: 93%;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reduced padding for extra small screens */
  }

  div {
    margin-left: 15px;
    text-align: left;

    @media (max-width: 768px) {
      margin-left: 0; /* Center text */
    }
  }
`;


export const ReminderIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e8f4fc;
  border-radius: 30%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ReminderTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Added for extra small screens */
  }
`;

export const ReminderDescription = styled.p`
  font-size: 16px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Added for extra small screens */
  }
`;

export const NotificationOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const CustomNotificationCard = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 30px auto; /* Centers the card horizontally */
  text-align: left;
  width: 100%;
  max-width: 1260px;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    padding-left: 10px;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .notification-options {
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const NotificationOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    text-align: center;
    gap: 8px;
  }

  div {
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  ${ReminderTitle} {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  ${ReminderDescription} {
    font-size: 1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const SetUpButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 16px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
    width: 60%;
  }
`;