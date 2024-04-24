const Doctor = require('../models/schema');

const getDoctors = async (disease) => {
    try {
        const doctors = await Doctor.find({disease: disease});
        return doctors
    } catch (error) {
        console.error("Error fetching doctors:", error);
        throw error;
    }
};

const getDisease = async (req,res) => {
    const text = req.body.text
    const diseaseResponse = await fetch("http://localhost:4000/predict", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    if (diseaseResponse.ok) {
        const disease = await diseaseResponse.json()
        const allDoctors = await getDoctors(disease.disease)
        return res.status(200).json({ message: disease.disease, text: text, doctors: allDoctors})
    }
    else{
        return res.status(400).json({ message: "Error in fetching disease" })
    }
}


module.exports = getDisease