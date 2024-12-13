import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  FAQList,
  FAQItem,
  Question,
  ToggleIcon,
  Answer,
  ContactSupport,
  SupportText,
  SupportButton,
} from "../styles/FAQSectionStyles.jsx";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "How do I add my vehicle to Motor360?", answer: "Simply enter your vehicle's registration number, and we'll automatically fetch all the relevant details from government databases. The process is quick, secure, and requires minimal input from your side." },
    { question: "How do reminders work?", answer: "Motor360 automatically tracks important dates like insurance renewals and PUC expiry. You'll receive notifications through SMS, email, or app notifications based on your preferences." },
    { question: "Is my data secure?", answer: "Yes, we take data security seriously. All your information is encrypted and stored securely. We only fetch data from official government sources and never share your personal information." },
    { question: "How does service tracking work?", answer: "Enter your last service date and current odometer reading, and our smart system will calculate the next recommended service date based on your vehicle's usage patterns and manufacturer guidelines." },
    { question: "Can I manage multiple vehicles?", answer: "Yes, you can add and manage multiple vehicles under a single account. Each vehicle will have its own dashboard with specific details and reminders." },
  ];

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <Subtitle>
        Find answers to common questions about Motor360 and how it can help you manage your vehicles better.
      </Subtitle>
      <FAQList>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {item.question}
              <ToggleIcon>{openIndex === index ? "▲" : "▼"}</ToggleIcon>
            </Question>
            {openIndex === index && <Answer>{item.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQList>
      <ContactSupport>
        <SupportText>Still have questions? We're here to help!</SupportText>
        <SupportButton>Contact Support</SupportButton>
      </ContactSupport>
    </Container>
  );
};

export default FAQSection;
