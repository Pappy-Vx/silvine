import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import News from './pages/news/News';
import Management from './pages/management/Management';
import Careers from './pages/careers/Careers';
import Faq from './pages/faq/Faq';
const App =() =>  {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Landing/>} />
          <Route path="/news" element={< News/>} />
          <Route path="/management" element={< Management/>} />
          <Route path="/career" element={< Careers/>} />
          <Route path="/faq" element={< Faq/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
