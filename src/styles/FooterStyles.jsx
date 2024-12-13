import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #171717;
  color: #9A9A9A;
  padding: 40px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const LogoSection = styled.div`
  max-width: 300px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Logo = styled.div`
  margin-bottom: 10px;
  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Description = styled.p`
  margin: 10px 5px;
  line-height: 1.8;
  font-weight: 500;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    fill: #9A9A9A;

    &:hover {
      fill: #fff;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  min-width: 150px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const LinkItem = styled.div`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }
`;

export const ContactItem = styled.div`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #333;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

export const CopyRight = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const FooterLink = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
