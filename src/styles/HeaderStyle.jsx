import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #171717;

  @media (max-width: 1024px) {
    padding: 15px 30px; /* Adjust padding for medium screens */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically for small screens */
    padding: 10px 20px;
  }
`;

export const Logo = styled.div`
  width: 120px; /* Adjust the width for better scaling */
  height: auto;

  svg {
    width: 100%;
    height: 100%;
    fill: orange;
  }

  @media (max-width: 1024px) {
    width: 100px; /* Smaller logo for medium screens */
  }

  @media (max-width: 768px) {
    width: 80px; /* Smaller logo for small screens */
    margin-bottom: 10px; /* Add spacing when stacked */
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Wrap items on smaller screens */
    justify-content: center; /* Center navigation for small screens */
    gap: 15px;
  }
`;

export const NavItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 14px; /* Slightly smaller font for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font for small screens */
  }
`;
