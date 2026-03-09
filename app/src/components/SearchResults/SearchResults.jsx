import styled from "styled-components";
import FoodCard from "../FoodCard/FoodCard";
import { Container } from "../../App";

const SearchResults = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <ResultsContainer>
        <Container>
          <LoadingMessage>
            <PulsingLoader />
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
            <EmptyIcon>😔</EmptyIcon>
            <p>No food items found</p>
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
          {data.map(({ id, name, image, text, price }, index) => (
            <CardWrapper key={id || name} delay={index * 50}>
              <FoodCard
                id={id}
                name={name}
                image={image}
                text={text}
                price={price}
              />
            </CardWrapper>
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
  background: linear-gradient(180deg, rgba(50, 51, 52, 0.5) 0%, rgba(26, 26, 26, 0.8) 100%);
`;

const FoodCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  padding-top: 20px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const CardWrapper = styled.div`
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: ${props => props.delay || 0}ms;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 20px;

  p {
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.5px;
  }
`;

const PulsingLoader = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 67, 67, 0.2);
  border-top: 3px solid #ff4343;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 20px rgba(255, 67, 67, 0.3);

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
  min-height: 350px;
  gap: 16px;
  padding: 40px;
  background: linear-gradient(135deg, rgba(255, 67, 67, 0.1) 0%, rgba(70, 144, 213, 0.1) 100%);
  border-radius: 24px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  p {
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    color: white;
    letter-spacing: 0.5px;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;
