import styled from "styled-components";
import FoodCard from "../FoodCard/FoodCard";
import { Container } from "../../App";

const SearchResults = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <ResultsContainer>
        <Container>
          <LoadingMessage>
            <span className="loader"></span>
            <p>Loading delicious food...</p>
          </LoadingMessage>
        </Container>
      </ResultsContainer>
    );
  }

  if (!data || data.length === 0) {
    return (
      <ResultsContainer>
        <Container>
          <EmptyMessage>
            <p>😔 No food items found</p>
            <span>Try a different search or category</span>
          </EmptyMessage>
        </Container>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <Container>
        <FoodCardsGrid>
          {data.map(({ name, image, text, price }) => (
            <FoodCard
              key={name}
              name={name}
              image={image}
              text={text}
              price={price}
            />
          ))}
        </FoodCardsGrid>
      </Container>
    </ResultsContainer>
  );
};

export default SearchResults;

const ResultsContainer = styled.section`
  min-height: calc(100vh - 300px);
  padding: 40px 16px;
  background: linear-gradient(
    180deg,
    rgba(50, 51, 52, 0.5) 0%,
    rgba(26, 26, 26, 0.8) 100%
  );
`;

const FoodCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding-top: 20px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 16px;

  .loader {
    border: 4px solid rgba(255, 67, 67, 0.2);
    border-top: 4px solid #ff4343;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 8px;

  p {
    font-size: 24px;
    font-weight: 600;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;
