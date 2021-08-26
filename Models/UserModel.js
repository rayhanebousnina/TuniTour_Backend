const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

const userSchema = new Schema({

    firstName : {
        type: String,
        required: true,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    birthDate : {
        type: Date,
    },
    hash_password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNumber : {
        type: String
    },
    profilePicture : {
        type: String
    }
}, { timestamps : true})

userSchema.virtual('password')
.set(function(password){
     this.hash_password = bcrypt.hashSync(password, 10) 
})


userSchema.methods = {
    authenticate: async function(password) {
        return await bcrypt.compare(password, this.hash_password)
    }
}
module.exports = user = mongoose.model('user', userSchema)