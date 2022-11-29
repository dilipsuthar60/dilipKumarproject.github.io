import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SearchResultPage from './pages/SearchResultPage';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className='bg-dark-gray text-white min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:userName' element={<UserProfile />} />
          <Route path='/search/:keyWord' element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// fabpot
// aryanguptasg