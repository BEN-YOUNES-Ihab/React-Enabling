import styled from 'styled-components';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';

const ContentWrapper = styled.div`
  margin-left: 228px;
`;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
