const user = require('../Models/userModel')

module.exports.register = async (req, res) => {
    console.log(req.body)
    const users = await user.create(req.body)
    res.json(users)
}

module.exports.login = async (req, res) => {
    const IsExist = await user.findOne({ username: req.body.username })
    if (IsExist) {
        if (IsExist.password === req.body.password) {
           console.log("login success")
           res.status(200).json({message:"login successful"})
           
        }

    }
}
