import MainPage from './pages/MainPage';
import { HashRouter, Routes, Route } from 'react-router';
import PasswordGenerator from './standalones/password-generator-app/App';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components/password-generator-app" element={<PasswordGenerator />} />
      </Routes>
    </HashRouter>
  )
}

export default App
