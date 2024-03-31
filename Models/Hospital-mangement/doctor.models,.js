import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInyears: {
        type: Number,
        required: true,
        default: 0
    },
    workingInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ],
}, { timestamps })

export const Doctor = mongoose.model("Doctor", doctorSchema)