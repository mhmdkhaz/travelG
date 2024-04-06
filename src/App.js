import Result from "./page/result";
import Index from "./page/index";
import { InputProvider } from "./context/context";

// start in react router dom
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <InputProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </InputProvider>
    </div>
  );
}

export default App;
