import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import MultiStepForm from './Exercise1/pages/MultiStepForm'
import './App.scss'
import SocialLinksPage from './Exercise2/pages/SocialLinks'
import Rating from './Exercise3/pages/Rating'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "";

    if (location.pathname.includes("exercise1")) {
      document.body.classList.add("exercise1-bg");
    } else if (location.pathname.includes("exercise2")) {
      document.body.classList.add("exercise2-bg");
    } else if (location.pathname.includes("exercise3")) {
      document.body.classList.add("exercise3-bg");
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/exercise1" replace />} />
      <Route path="/exercise1" element={<MultiStepForm />} />
      <Route path="/exercise2" element={<SocialLinksPage />} />
      <Route path="/exercise3" element={<Rating />} />
    </Routes>
  )
}

export default App
