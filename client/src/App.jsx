import { Routes, Route, Navigate } from 'react-router-dom';
import { SerialProvider } from './contexts/SerialContext';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import Lab0 from './pages/Lab0';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4 from './pages/Lab4';
import Lab5 from './pages/Lab5';
import Lab6 from './pages/Lab6';
import Lab7 from './pages/Lab7';
import Lab8 from './pages/Lab8';

const labComponents = [Lab0, Lab1, Lab2, Lab3, Lab4, Lab5, Lab6, Lab7, Lab8];

export default function App() {
  return (
    <SerialProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {labComponents.map((Component, index) => (
              <Route key={index} path={`/lab${index}`} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </SerialProvider>
  );
}
