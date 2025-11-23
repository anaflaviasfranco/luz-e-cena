import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
    <Header />
      <Banner
        src="./banner.png"
        alt="Banner principal da página do site Luz e Cena"
      />
      <MovieSection />
      <Banner
        src="./combo.png"
        alt="Combo"
      />
      <Newsletter />
    </>
  );
}

export default App;
