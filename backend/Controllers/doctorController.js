

import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import BookingSchema from "../models/BookingSchema.js";


// this will take the Doctor id from the req parameter
export const updateDoctor = async (req,res) => {
    const id = req.params.id

    try{ // update their information with the data from the req body. {$set:req.body} this is the new value. {new:true} this is to make sure we get the updated Doctor info as response
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body},{new:true})  
        res.status(200).json({success:true, message:"Successfully updated", data:updatedDoctor})
    } catch(err){
        res.status(500).json({success:false, message:"failed to update Doctor"})
    }

}

export const deleteDoctor = async (req,res) => {
    const id = req.params.id

    try{ 
        await Doctor.findByIdAndDelete(id)  
        res.status(200).json({success:true, message:"Successfully Deleted"})
    } catch(err){
        res.status(500).json({success:false, message:"failed to delete Doctor"})
    }

}

export const getSingleDoctor = async (req,res) => {
    const id = req.params.id

    try{ 
        const doctor = await Doctor.findById(id).populate("reviews").select("-password");
        res.status(200).json({success:true, message:"Doctor Found", data:doctor})
    } catch(err){
        res.status(404).json({success:false, message:"No Doctor found"})
    }

}

export const getAllDoctor = async (req, res) => {
    try { 
        const { query } = req.query;
        console.log('Search Query:', query); // Log the search query

        let doctors;
        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            doctors = await Doctor.find().select("-password");
        }

        console.log('Doctors Found:', doctors); // Log the found doctors
        res.status(200).json({ success: true, message: "Doctor(s) Found", data: doctors });
    } catch (err) {
        console.error('Error Fetching Doctors:', err); // Log any errors
        res.status(404).json({ success: false, message: "Not found", error: err.message });
    }
}


export const getDoctorProfile = async(req, res)=>{
    const doctorId = req.userId
    try{
        const doctor = await Doctor.findById(doctorId)
        if(!doctor){
            return res.status(404).json({success:false, message:'Doctor not found'})
        }
        const {password, ...rest} = doctor._doc
        const appointments = await Booking.find({doctor:doctorId});
        res.status(200).json({success:true, message:'Profile info is getting', data:{...rest, appointments}})

    } catch(err){
        res.status(500).json({success: false, message:'Something went wrong'})
    }
}


