import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
