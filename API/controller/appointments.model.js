const mongoose = require("mongoose")
const Appointment = require("../model/appointments")


// C from CRUD[POST]
exports.createAppointment = async (req, res) => {
    try {

        // create a appointment object
        const appointment = new Appointment({
            _id: new mongoose.Types.ObjectId(),
            fname: req.body.fname,
            emailid: req.body.emailid,
            acontact: req.body.acontact,
            doa: req.body.doa,
            city: req.body.city,
            gender: req.body.gender,
            preferredcentre: req.body.preferredcentre,
            contactway: req.body.contactway,
            comment: req.body.comment

          
        })
        const appointmentData = await appointment.save()
        res.status(200).json({
            msg: "Data has been added successfully",
            appointment: appointmentData
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// R from CRUD[GET]
exports.getAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
            data: appointments
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

// R from CRUD[GET appointment by id]
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.appointmentId);
        let m = ""
        if (appointment === null) {
            m = "No matching id of appointment found"
        } else {
            m = "Requested data fetched successfully"
        }

        res.status(200).json({
            msg: m,
            data: appointment
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

// U from CRUD[PUT]
exports.updateAppointment = async (req, res) => {
    try {
        const data = await Appointment.findByIdAndUpdate(req.params.appointmentId, req.body);
        res.status(200).json({
            msg: "Data has been updated successfully",
            appointment: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}
// D from CRUD[DELETE]
exports.deleteAppointment = async (req, res) => {
    try {
        const data = await Appointment.findByIdAndDelete(req.params.appointmentId);
        res.status(200).json({
            msg: "Data deleted successfully",
            appointment: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}