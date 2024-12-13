import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/motor_360.svg';
import {
  FooterContainer,
  FooterSection,
  LogoSection,
  Logo,
  Description,
  SocialIcons,
  LinksSection,
  Column,
  ColumnTitle,
  LinkItem,
  ContactItem,
  BottomBar,
  CopyRight,
  FooterLinks,
  FooterLink,
} from '../styles/FooterStyles.jsx';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LogoSection>
        <LogoIcon style={{ width: '40%', height: '40%', fill: 'orange' }} />
          <Description>
            Your Virtual Garage, designed to simplify and streamline your vehicle's upkeep.
          </Description>
          <SocialIcons>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </SocialIcons>
        </LogoSection>
        <LinksSection>
          <Column>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkItem>Overview</LinkItem>
            <LinkItem>Vehicle Registration</LinkItem>
            <LinkItem>Smart Reminders</LinkItem>
            <LinkItem>Challan Tracking</LinkItem>
            <LinkItem>Service Management</LinkItem>
          </Column>
          <Column>
            <ColumnTitle>Support</ColumnTitle>
            <LinkItem>FAQs</LinkItem>
            <LinkItem>Privacy Policy</LinkItem>
            <LinkItem>Terms of Service</LinkItem>
            <LinkItem>Contact Us</LinkItem>
          </Column>
          <Column>
            <ColumnTitle>Contact</ColumnTitle>
            <ContactItem>📧 support@motor360.in</ContactItem>
            <ContactItem>📞 +91 123 456 7890</ContactItem>
          </Column>
        </LinksSection>
      </FooterSection>
      <BottomBar>
        <CopyRight>© 2024 Motor360. All rights reserved.</CopyRight>
        <FooterLinks>
          <FooterLink>Terms</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Cookies</FooterLink>
        </FooterLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
