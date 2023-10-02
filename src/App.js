import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CardDetail from "./components/CardDetail";
function App() {
  return (
    <div className="bg-blue-100 w-full p-4 px-8 flex justify-center items-center flex-col">
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/property/:id" element={<CardDetail />} />
    </Routes>
    </div>
  );
}

export default App;
