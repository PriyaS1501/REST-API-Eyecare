const mongoose = require("mongoose")
const User = require("../model/users")


// R from CRUD[GET]
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
            data: users
        })

    }

    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// R from CRUD[GET user by id]
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        let m = ""
        if (user === null) {
            m = "No matching id of user found"
        } else {
            m = "Requested data fetched successfully"
        }

        res.status(200).json({
            msg: m,
            data: user
        })

    }

    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}
