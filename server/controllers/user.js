const bcrypt = require("bcryptjs");
const User = require("../models/User")
export const register = async (req, res) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            name:req.body.name,
            email: req.body.email,
            password: hash
        });
        await newUser.save();
        res.status(200).json("User has been created!");
    } catch (error) {
        console.log(error)
    }
}