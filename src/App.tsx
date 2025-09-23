import { Route, Routes } from 'react-router-dom'
import MultiStepForm from './Exercise1/pages/MultiStepForm'
import './App.scss'
import SocialLinksPage from './Exercise2/pages/SocialLinks'
import Rating from './Exercise3/pages/Rating'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MultiStepForm />} />
      <Route path="/exercise2" element={<SocialLinksPage />} />
      <Route path="/exercise3" element={<Rating />} />
    </Routes>
  )
}

export default App
