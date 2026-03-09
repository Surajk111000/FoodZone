import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { useAppContext } from "../../context/AppContext";

const Header = ({ onSearch }) => {
  const { getCartCount, setShowCart } = useAppContext();
  const cartCount = getCartCount();

  return (
    <HeaderContainer>
      <LogoSection>
        <LogoEmoji>🍕</LogoEmoji>
        <LogoText>FoodZone</LogoText>
      </LogoSection>

      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          onChange={(e) => onSearch(e)}
          placeholder="Search your favorite food..."
          aria-label="Search food"
        />
        <CartIcon 
          onClick={() => setShowCart(true)}
          hasItems={cartCount > 0}
          title={`Cart (${cartCount} items)`}
        >
          🛒
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </CartIcon>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: auto;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  background: linear-gradient(135deg, rgba(70, 144, 213, 0.4) 0%, rgba(255, 67, 67, 0.2) 100%);
  backdrop-filter: blur(30px);
  border-bottom: 2px solid rgba(255, 67, 67, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 100;
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    gap: 12px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoEmoji = styled.span`
  font-size: 32px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const LogoText = styled.h1`
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  letter-spacing: 1.5px;
  white-space: nowrap;
  background: linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 16px;
  font-size: 18px;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 24px;
  height: 44px;
  font-size: 14px;
  padding: 0 48px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: ${colors.primary};
    box-shadow: 0 0 30px rgba(255, 67, 67, 0.4);
  }

  &:hover:not(:focus) {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    height: 40px;
    padding: 0 44px;
  }
`;

const CartIcon = styled.button`
  position: relative;
  background: ${props => props.hasItems 
    ? `linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%)`
    : "rgba(255, 255, 255, 0.1)"};
  border: 2px solid ${props => props.hasItems 
    ? colors.primary
    : "rgba(255, 255, 255, 0.2)"};
  font-size: 22px;
  padding: 8px 12px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.15) rotate(10deg);
    background: linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%);
    border-color: #ff4343;
    box-shadow: 0 8px 25px rgba(255, 67, 67, 0.4);
  }

  &:active {
    transform: scale(1.05) rotate(5deg);
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px 10px;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 12px rgba(255, 67, 67, 0.4);
  animation: pulse 0.6s ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
