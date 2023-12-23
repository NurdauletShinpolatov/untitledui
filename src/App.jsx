import "./scss/global.scss";
import { useState } from "react";
import AboutLayout from "./components/layouts/AboutLayout";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [selectedPage, setSelectedPage] = useState("/");
  return (
    <div className="App">
      {selectedPage == "/" && <MainLayout onAboutPage={setSelectedPage} />}
      {selectedPage == "/about" && <AboutLayout onAboutPage={setSelectedPage} />}
    </div>
  );
}

export default App;
