import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/Index";
function App() {

  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<IndexPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
