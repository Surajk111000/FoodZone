import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

const Header = ({ onSearch, logo }) => {
  return (
    <HeaderContainer>
      <div className="logo-section">
        <img src={logo} alt="FoodZone Logo" className="logo" />
        <h1>FoodZone</h1>
      </div>

      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          onChange={onSearch}
          placeholder="Search your favorite food..."
          aria-label="Search food"
        />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: auto;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    90deg,
    rgba(32, 32, 32, 0.8) 0%,
    rgba(50, 50, 52, 0.8) 100%
  );
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 67, 67, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  .logo-section {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 0 0 auto;

    .logo {
      width: 40px;
      height: 40px;
      object-fit: contain;
      filter: drop-shadow(0 2px 4px rgba(255, 67, 67, 0.3));
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px;

    .logo-section h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .logo-section {
      width: 100%;
      justify-content: center;

      h1 {
        font-size: 18px;
      }
    }
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  font-size: 18px;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid ${colors.border};
  color: white;
  border-radius: 12px;
  height: 40px;
  font-size: 14px;
  padding: 0 40px 0 40px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.12);
    border-color: #ff6b6b;
    box-shadow: 0 0 20px rgba(255, 67, 67, 0.3);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    height: 36px;
    padding: 0 35px;
  }
`;
