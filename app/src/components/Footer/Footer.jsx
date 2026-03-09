import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h4>About FoodZone</h4>
          <p>
            FoodZone is your ultimate destination for delicious food delivery.
            Browse through our diverse menu and order your favorite meals.
          </p>
        </Section>

        <Section>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Section>

        <Section>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="Instagram">
              📷
            </a>
          </SocialLinks>
        </Section>
      </FooterContent>

      <FooterBottom>
        <p>
          © {currentYear} FoodZone. All rights reserved. | Powered with ❤️
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(26, 26, 26, 0.95) 0%,
    rgba(50, 50, 52, 0.95) 100%
  );
  border-top: 1px solid rgba(255, 67, 67, 0.2);
  color: rgba(255, 255, 255, 0.8);
  padding: 40px 16px 20px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const Section = styled.div`
  h4 {
    color: #ff4343;
    margin-bottom: 12px;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #ff4343;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 67, 67, 0.1);
    border: 1px solid rgba(255, 67, 67, 0.3);
    border-radius: 50%;
    color: #ff4343;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #ff4343;
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 67, 67, 0.1);
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`;
