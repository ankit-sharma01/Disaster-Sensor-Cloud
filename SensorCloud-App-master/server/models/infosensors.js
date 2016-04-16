var mongoose = require('mongoose');

module.exports = mongoose.model('infosensors',{
	sensorid: String,
	city: String,
    area: String,
    sensor_type: String,
    sensor_owner_name: String,
    sensor_owner_id: String,
    health: String
});