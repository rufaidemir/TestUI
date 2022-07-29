import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './App/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
