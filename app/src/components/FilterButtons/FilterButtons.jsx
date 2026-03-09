import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

const FilterButtons = ({ buttons, selectedBtn, onFilter }) => {
  return (
    <FilterContainer>
      {buttons.map((btn, index) => (
        <FilterButton
          key={btn.type}
          isSelected={selectedBtn === btn.type}
          onClick={() => onFilter(btn.type)}
          aria-pressed={selectedBtn === btn.type}
          delay={index * 50}
        >
          <ButtonEmoji>{btn.emoji || "🍽️"}</ButtonEmoji>
          <span>{btn.name}</span>
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default FilterButtons;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 30px 16px;
  flex-wrap: wrap;
  animation: slideDown 0.6s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 24px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 18px 8px;
  }
`;

const ButtonEmoji = styled.span`
  font-size: 18px;
  display: inline-block;
  transition: transform 0.3s ease;
`;

const FilterButton = styled.button`
  background: ${({ isSelected }) =>
    isSelected
      ? `linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%)`
      : `rgba(255, 255, 255, 0.08)`};
  border: 2px solid ${({ isSelected }) =>
    isSelected ? colors.primary : `rgba(255, 255, 255, 0.2)`};
  border-radius: 24px;
  padding: 11px 24px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.5px;
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 8px 25px rgba(255, 67, 67, 0.4)" : "0 4px 15px rgba(0, 0, 0, 0.2)"};
  animation: fadeInScale 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: ${props => props.delay || 0}ms;

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    background: ${({ isSelected }) =>
      isSelected
        ? `linear-gradient(135deg, #ff6b6b 0%, #ff4343 100%)`
        : `linear-gradient(135deg, rgba(255, 67, 67, 0.2) 0%, rgba(255, 107, 107, 0.15) 100%)`};
    border-color: ${colors.primary};
    box-shadow: 0 12px 35px rgba(255, 67, 67, 0.4);
    transform: translateY(-4px);
  }

  &:hover ${ButtonEmoji} {
    transform: scale(1.2) rotate(-10deg);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 9px 18px;
    font-size: 13px;

    ${ButtonEmoji} {
      font-size: 16px;
    }
  }
`;
