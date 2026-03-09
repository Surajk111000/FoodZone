import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import { BASE_URL, FILTER_BUTTONS } from "./constants";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  // Fetch food data on mount
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const json = await response.json();
        setData(json);
        setFilteredData(json);
      } catch (err) {
        setError("Unable to fetch data. Please try again later.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  // Search food by name
  const searchFood = (e) => {
    const searchValue = e.target.value.trim();

    if (searchValue === "") {
      // Reset to current filter
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
  font-size: 48px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 16px;
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 28px;
    margin: 0;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
`;