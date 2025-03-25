import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
    },
    verifyOTP: {
        type: String,
        default : ''
    },

    verifyOTPExpireAt: {
        type: Number,
        default : 0
    },

    isverified: {
        type: Boolean,
        default : false
    },
    resetOTP: {
        type: String,
        default : ''
    },
    resetOTPexpireAt: {
        type: Number,
        default : 0
    },
}, {
  timestamps: true,
});
const userModel =  mongoose.model.user||mongoose.model("User", userSchema);
export default userModel;