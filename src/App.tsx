import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router';
import PasswordGenerator from './standalones/password-generator-app/App';

const basename = import.meta.env.BASE_URL;

function App() {

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="components/password-generator-app" element={<PasswordGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
