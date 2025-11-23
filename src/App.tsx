import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <>
    <Header />
      <Banner
        src="./banner.png"
        alt="Banner principal da página do site Luz e Cena"
      />
      <MovieSection />
    </>
  );
}

export default App;
