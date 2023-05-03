const express = require('express')
const router = express.Router()
const appointmentController = require('../controller/appointments.model')


// handle POST request for appointments
router.post('/', appointmentController.createAppointment)

// handle GET request for appointments
router.get('/', appointmentController.getAppointment)

// handle GET request for single appointments
router.get('/:appointmentId', appointmentController.getAppointmentById)

// Handle PUT request
router.put('/:appointmentId', appointmentController.updateAppointment)

// Handle DELETE request
router.delete('/:appointmentId', appointmentController.deleteAppointment)


module.exports = router