import React from "react";
import {
  Container,
  Title,
  Subtitle,
  TestimonialsContainer,
  TestimonialCard,
  UserName,
  UserRole,
  Stars,
  TestimonialText,
  StatsContainer,
  Stat,
  StatNumber,
  StatLabel,
  JoinButton,
} from "../styles/ReviewStyles.jsx";

const Review = () => {
  return (
    <Container>
      <Title>What Our Users Say</Title>
      <Subtitle>
        Join thousands of satisfied users who trust Motor360 to manage their vehicles
        efficiently and stay on top of important updates.
      </Subtitle>

      <TestimonialsContainer>
        <TestimonialCard>
          <UserName>Rahul Sharma</UserName>
          <UserRole>Car Owner</UserRole>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <TestimonialText>
            "Never missed a service or insurance renewal since I started using
            Motor360. The reminders are a lifesaver!"
          </TestimonialText>
        </TestimonialCard>

        <TestimonialCard>
          <UserName>Priya Patel</UserName>
          <UserRole>Bike Owner</UserRole>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <TestimonialText>
            "The challan tracking feature is fantastic! I always know if there
            are any pending challans for my vehicle."
          </TestimonialText>
        </TestimonialCard>

        <TestimonialCard>
          <UserName>Arun Kumar</UserName>
          <UserRole>Multiple Vehicle Owner</UserRole>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <TestimonialText>
            "Managing multiple vehicles was a hassle before Motor360. Now
            everything is organized in one place!"
          </TestimonialText>
        </TestimonialCard>
      </TestimonialsContainer>

      <StatsContainer>
        <Stat>
          <StatNumber>5000+</StatNumber>
          <StatLabel>Active Users</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>10000+</StatNumber>
          <StatLabel>Vehicles Managed</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>4.8/5</StatNumber>
          <StatLabel>User Rating</StatLabel>
        </Stat>
      </StatsContainer>

      <JoinButton>Join Our Community</JoinButton>
    </Container>
  );
};

export default Review;
