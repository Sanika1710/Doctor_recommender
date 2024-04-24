import { createContext, useState } from 'react'
import Homepage from './pages/homepage'
import "./index.css"
import { Routes, Route } from 'react-router-dom'
import Doctors from './pages/doctors'

export const DoctorsData = createContext()

function App() {
  const [disease, setDisease] = useState()
  const [doctorsList, setDoctorsList] = useState([])
  return (
    <DoctorsData.Provider value={{ doctorsList, setDoctorsList, disease, setDisease }}>
      <div className='h-screen bg-black'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/doctors' element={<Doctors />} />
        </Routes>
      </div>
    </DoctorsData.Provider>
  )
}

export default App
