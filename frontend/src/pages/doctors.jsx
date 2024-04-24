import { DoctorsData } from '../App'
import React, { useContext, useEffect, useState } from 'react'

const Doctors = () => {
    const [headers, setHeaders] = useState([
        { label: "Doctor Name", value: "name" },
        { label: "Specialisation", value: "specialisation" },
        { label: "Qualification", value: "qualification" },
        { label: "Experience", value: "experience" },
        { label: "City", value: "city" },
        { label: "Rating", value: "rating" },
        { label: "Slots", value: "slots" },
    ])
    const { disease, doctorsList, setDoctorsList, setDisease } = useContext(DoctorsData)
    const getDoctorsList = async () => {
        if (!doctorsList) {
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
    }
    useEffect(() => {
        getDoctorsList()
    }, [disease])


    return (
        <div className=''>
            <h3 className='text-white'>Disease: {disease}</h3>
            <div className="overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto my-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {headers.map((head, index) => {
                                return <th scope="col" className="px-6 py-3" key={index}>{head["label"]}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {doctorsList && doctorsList.map((doctor, index) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                    {headers.map((header, idx) => {
                                        return (
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={idx}>
                                                {doctor[header.value]}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Doctors
