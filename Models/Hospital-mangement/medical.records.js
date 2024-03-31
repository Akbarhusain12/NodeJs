import mongoose from "mongoose";

const medicalRecordsSchema = new mongoose.Schema({},{timestamps})

export const MedicalRecords = mongoose.model("MedicalRecords",medicalRecordsSchema)