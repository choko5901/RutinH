import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/landingPage";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes> 
          <Route path="/" element={<Layout />} >
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
