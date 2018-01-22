var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: '	cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: '	ndze41k2pt5tq3yp',
        password: '	zu58wtieu6ar1dj9',
        database: 'burgers_db',
    });
};


module.exports = connection;