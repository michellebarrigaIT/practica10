import { Route, Routes } from 'react-router-dom'
import MultiStepForm from './Exercise1/pages/MultiStepForm'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MultiStepForm />} />
    </Routes>
  )
}

export default App
