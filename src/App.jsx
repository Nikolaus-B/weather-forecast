import "./App.css";
// import { fetchCityWeekWeather } from "./api";
import { Container, GlobalStyle } from "./components/GlobalStyle";

// const weather = await fetchCityWeekWeather(
//   "Berlin",
//   "2024-02-19",
//   "2024-02-23"
// );

// console.log(weather);

function App() {
  return (
    <Container>
      <GlobalStyle />
    </Container>
  );
}

export default App;
