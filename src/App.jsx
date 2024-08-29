// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import JobInfoPage from "./pages/JobInfoPage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/job-info" element={<JobInfoPage />} />
      </Routes>  
  
  );
}

export default App;

