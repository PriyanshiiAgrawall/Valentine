import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Ask from './pages/Ask';
import Yes from './pages/Yes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ask />}></Route>
        <Route path="/yes" element={<Yes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
