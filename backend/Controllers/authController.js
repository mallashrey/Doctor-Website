
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


//receive user as parameter and return jwt which accepts 
//object that contains the payload, and the second argument is the secret key used to signin token                                                                              
const generateToken = (user) =>{
    return jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY,{
        expiresIn: '15d',
    } ) 
}



//start register user implementation
export const register = async(req,res)=>{

    const {email, password, name, role, photo, gender} = req.body

    try{
        let user = null //this will hold a user information later if found

        // to check if user is a patient or doctor for database interaction
        if(role ==='patient'){  
            user = await User.findOne({email}) // need to check if the user with the given email already exists in the database. so initialize the user first
        }else if (role ==='doctor'){           // need to use await otherwise it will say user already exists in the database even when its not . 
            user = await Doctor.findOne({email})
        }

        // now check the initialized user if they already exists
        if (user){ 
            return res.status(400).json({message:"USer already exists"})
        }

        //hash password for the user if they dont exist
        const salt = await bcrypt.genSalt(10)  // salt is a random value that is combined with password before hashing so bcrypt.hash takes two arguments.
        const hashPassword = await bcrypt.hash(password, salt)
        
        if(role==='patient'){
            user = new User({
                name, email, password:hashPassword , photo, gender,role
            })
        }
        if(role==='doctor'){
            user = new Doctor({
                name, email, password:hashPassword , photo, gender,role
            })    
        }
        await user.save()

        res.status(200).json({success:true, message:"User saved successfully"})


    }
    catch(error){
        res.status(500).json({success:false, message:'Internal Server Error, Try again'})
    }
}

// end register user implementation


//start login user implementation
export const login = async(req,res)=>{

    const{email, password} = req.body

    try{
        let user = null //this will hold a user information later if found

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})

        if(patient){  // if email found in patient, assign the user as patient (this is Login)
            user = patient
        }

        if (doctor){  // if email found in doctor, assign the user as doctor (this is Login)
            user = doctor
        }

        // if user not exist in both databases email collection
        if(!user){
            return res.status(404).json({ message:"User not exist" })
        }

        // if user found, then we have to check if the provided password is matches the hashed password stood in the user object
        //compare the password 
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return res.status(400).json({ status: false, message: "Invalid credentials" })
        }

        //get token
        const token = generateToken(user);

        const {password, role, appointments, ...rest} = user._doc

        res.status(200).json({ status: true, message: "Successfully Login", token, data:{...rest}, role })

    }catch(err){
        res.status(500).json({ status: false, message:"Failed to login"})
    }
}
