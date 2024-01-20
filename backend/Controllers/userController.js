import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";


// this will take the user id from the req parameter
export const updateUser = async (req,res) => {
    const id = req.params.id

    try{ // update their information with the data from the req body. {$set:req.body} this is the new value. {new:true} this is to make sure we get the updated user info as response
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body},{new:true})  
        res.status(200).json({success:true, message:"Successfully updated", data:updatedUser})
    } catch(err){
        res.status(500).json({success:false, message:"failed to update user"})
    }

}

export const deleteUser = async (req,res) => {
    const id = req.params.id

    try{ 
        await User.findByIdAndDelete(id)  
        res.status(200).json({success:true, message:"Successfully Deleted"})
    } catch(err){
        res.status(500).json({success:false, message:"failed to delete user"})
    }

}

export const getSingleUser = async (req,res) => {
    const id = req.params.id

    try{ 
        const user = await User.findById(id).select("-password");
        res.status(200).json({success:true, message:"User Found", data:user})
    } catch(err){
        res.status(404).json({success:false, message:"No user found"})
    }

}

export const getAllUser = async (req,res) => {

    try{ 
        const users = await User.find({}).select("-password")  //.select("-password") this will exclude the password in the get request body for security reasons
        res.status(200).json({success:true, message:"User Found", data:users})
    } catch(err){
        res.status(404).json({success:false, message:"Not found"})
    }

}


export const getUserProfile = async (req,res) => {
    const userId = req.userId
    try{
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }
        const {password, ...rest} = user._doc
        res.status(200).json({success:true, message:'user Profile info is getting', data:{...rest}})

    } catch(err){
        res.status(500).json({success: false, message:'Something went wrong'})
    }
}

export const getMyAppointments = async (req,res) =>{
    try{
    
        // step 1 : retrieve appointments from booking
        const bookings = await Booking.find({user:req.userId})

        //step 2 : extract doctor ids from appointment bookings
        const doctorIds = bookings.map(el=>el.doctor.id)

        //step 3 : retrieve doctors using doctor ids
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password')
        res.status(200).json({success:true, message:"Appointments are getting", data:doctors})
    }
    
    catch(err){
        res.status(500).json({success: false, message:'Something went wrong'})
    }
}