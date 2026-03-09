import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h4>🍕 About FoodZone</h4>
          <p>
            FoodZone is your ultimate destination for delicious food delivery.
            Browse through our diverse menu and order your favorite meals with ease.
          </p>
        </Section>

        <Section>
          <h4>⚡ Quick Links</h4>
          <ul>
            <li>
              <a href="#home">🏠 Home</a>
            </li>
            <li>
              <a href="#menu">📱 Menu</a>
            </li>
            <li>
              <a href="#about">ℹ️ About</a>
            </li>
            <li>
              <a href="#contact">📞 Contact</a>
            </li>
          </ul>
        </Section>

        <Section>
          <h4>🌐 Follow Us</h4>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook" title="Facebook">
              f
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter" title="Twitter">
              𝕏
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram" title="Instagram">
              📷
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn" title="LinkedIn">
              in
            </SocialLink>
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
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(50, 50, 52, 0.95) 100%);
  border-top: 2px solid rgba(255, 67, 67, 0.3);
  color: rgba(255, 255, 255, 0.8);
  padding: 50px 16px 20px;
  margin-top: 80px;
  backdrop-filter: blur(20px);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  animation: fadeIn 0.6s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const Section = styled.div`
  h4 {
    color: #ff4343;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 12px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(5px);
      }

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: inline-flex;
        align-items: center;
        gap: 8px;

        &:hover {
          color: #ff4343;
          text-shadow: 0 0 10px rgba(255, 67, 67, 0.5);
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, rgba(255, 67, 67, 0.15) 0%, rgba(255, 107, 107, 0.1) 100%);
  border: 2px solid rgba(255, 67, 67, 0.3);
  border-radius: 12px;
  color: #ff4343;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    color: white;
    border-color: #ff4343;
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(255, 67, 67, 0.4);
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 67, 67, 0.2);
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.3px;
`;
