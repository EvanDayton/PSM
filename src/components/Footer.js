import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 1rem;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #fff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <p>Email: info@psm.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
        </FooterSection>
      </FooterContent>
      <p>&copy; 2024 Platinum Solutions Marketing. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;