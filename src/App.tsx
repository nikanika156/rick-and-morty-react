import { Home } from "./pages/home/home";
import "./App.css";
import { CharactersPage } from "./pages/characters/character-page";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
export function App() {
  return (
    <>
      {/* <div className=""> */}
        <BrowserRouter>
          <Header />
          <div className="max-w-[1280px] m-auto px-5">
            <Routes>
              <Route path="/home" Component={Home} />
              <Route path="/" Component={CharactersPage} />
              {/* <Route path='/episode' Component={CharactersPage} /> */}
              {/* <Route path='/location' Component={CharactersPage} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      {/* </div> */}
    </>
  );
}
