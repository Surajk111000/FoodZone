import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

const FilterButtons = ({ buttons, selectedBtn, onFilter }) => {
  return (
    <FilterContainer>
      {buttons.map((btn) => (
        <FilterButton
          key={btn.type}
          isSelected={selectedBtn === btn.type}
          onClick={() => onFilter(btn.type)}
          aria-pressed={selectedBtn === btn.type}
        >
          {btn.name}
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

  @media (max-width: 768px) {
    gap: 10px;
    padding: 20px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 15px 8px;
  }
`;

const FilterButton = styled.button`
  background: ${({ isSelected }) =>
    isSelected
      ? `linear-gradient(135deg, ${colors.primaryHover} 0%, #ff6b6b 100%)`
      : `linear-gradient(135deg, ${colors.primary} 0%, #ff5555 100%)`};
  border: 2px solid
    ${({ isSelected }) => (isSelected ? "white" : colors.primary)};
  border-radius: 25px;
  padding: 10px 24px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 4px 15px rgba(255, 67, 67, 0.4)" : "none"};

  &:hover {
    background: linear-gradient(135deg, ${colors.primaryHover} 0%, #ff6b6b 100%);
    box-shadow: 0 4px 15px rgba(255, 67, 67, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;
