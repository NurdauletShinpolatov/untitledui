import "./scss/global.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Article from "./components/Article";
import Partners from "./components/Partners";
import Admins from "./components/Admins";
import Goals from "./components/Goals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Article />
      <Partners />
      <Admins />
      <Goals />
      <Footer />
    </div>
  );
}

export default App;
