import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import { FILTER_BUTTONS, MOCK_FOOD_DATA } from "./constants";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  // Load mock data on mount
  useEffect(() => {
    try {
      setLoading(true);
      // Simulate API delay for better UX
      setTimeout(() => {
        setData(MOCK_FOOD_DATA);
        setFilteredData(MOCK_FOOD_DATA);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to load food data");
      setLoading(false);
    }
  }, []);

  // Search food by name
  const searchFood = (e) => {
    const searchValue = e.target.value.trim();

    if (searchValue === "") {
      filterFood(selectedBtn);
      return;
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  // Filter food by type
  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
    } else {
      const filter = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      setFilteredData(filter);
    }
    setSelectedBtn(type);
  };

  if (error) {
    return (
      <AppContainer>
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </ErrorContainer>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <Header onSearch={searchFood} logo="/logo.svg" />
      <Container>
        <FilterButtons
          buttons={FILTER_BUTTONS}
          selectedBtn={selectedBtn}
          onFilter={filterFood}
        />
        <SearchResults data={filteredData} isLoading={loading} />
      </Container>
      <Footer />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
`;

const ErrorIcon = styled.div`
  font-size: 64px;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 20px;
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(255, 67, 67, 0.1) 0%, rgba(70, 144, 213, 0.1) 100%);
  border-radius: 24px;
  border: 2px solid rgba(255, 67, 67, 0.2);
  margin: 40px auto;
  max-width: 500px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    color: white;
    letter-spacing: 0.5px;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-size: 15px;
    font-weight: 500;
  }
`;