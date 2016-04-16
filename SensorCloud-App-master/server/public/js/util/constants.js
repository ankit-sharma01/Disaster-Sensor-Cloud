/**
* variable for storing constants
*/

var URLs = {

	"LOGIN"	: "/login",
	"SIGNUP": "/user",
	"SENSOR_DATA":"/api/sensor_data",
	"LOGOUT": "/logout",
	"USER_DATA":"/api/user",
	"SENSOR_INFO" : "/api/sensor"
};

var DATA_INTERVAL = 7000;

/*var GROUP_OPTIONS = [
	{
		group:'area',
		values:['San Jose State University','Stanford University','San Jose City College','Santa Clara University'],
		group_title : 'Area'
	},
	{
		group:'city',
		values:['San Jose','Stanford','Santa Clara'],
		group_title:'City'
	}];*/

var YAXIS_OPTIONS = [
	{
		'title':'Temperature',value:'temp'
	},
	{
		'title':'Humidity',value:'humidity'
	},
	{
		'title':'Pressure',value:'pressure'
	}
	];

var PRICE_CITIES = 
	{
		"San Jose":10,
		"Santa Clara":15,
		"Stanford":25
	};