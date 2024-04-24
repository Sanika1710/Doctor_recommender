import { DoctorsData } from '../App'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const { disease, setDisease, setDoctorsList } = useContext(DoctorsData)
  const handleChange = (e) => {
    setDisease(e.target.value)
  }

  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:5000/disease`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: disease })
    })
    const response_json = await response.json()
    const sortedDoctorsList = response_json.doctors.sort((a, b) => b.preference - a.preference);
    setDisease(response_json.disease);
    setDoctorsList(sortedDoctorsList);
  }
  return (
    <div className='bg-black text-white h-screen flex flex-col justify-center items-center gap-6'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold'>Doctor Recommender</h1>
        <p className='text-xl'>Doctor ready at your service</p>
      </div>
      <div className='w-[200px]'>
        <input name="disease" id="disease" className='text-black p-2 py-1' placeholder='Enter your Disease' value={disease} onChange={handleChange} />
      </div>
      <button className='border border-white p-2 px-6 rounded-lg' onClick={handleSubmit}> <Link to="/doctors">Submit</Link></button>
    </div>
  )
}

export default Homepage
