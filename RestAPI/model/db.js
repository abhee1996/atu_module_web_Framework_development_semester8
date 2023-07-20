var mysql = require('mysql2');

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user     : 'root',
  password : 'grOoMpKi8278',
  database : 'weather2023',
  port:"3306",
  timezone: 'utc+0'  
});
 
connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database weather2023`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getSites = function(req,res){

    connection.query(`SELECT * FROM sites`, function(err, rows, fields) {
        if (err) throw err;
      // console.log('rows', rows)
        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}
exports.getWeatherLiveData = function(req,res){
    const sql = `SELECT * FROM weatherdata`
    console.log('sql', sql)
    connection.query(sql, function(err, rows, fields) {
      console.log('rows', rows)

        if (err) throw err;
        res.status(200);

        res.send(JSON.stringify(rows));	  
    });	
}
exports.getWeatherData = function(req,res){
    const datenow = req.params.datenow;
    console.log('datenow', datenow)
    const sql = `SELECT * FROM weatherdata WHERE datenow="${datenow}"`
    console.log('sql', sql)
    connection.query(sql, function(err, rows, fields) {
      console.log('rows', rows)

        if (err) throw err;
        res.status(200);

        res.send(JSON.stringify(rows));	  
    });	
}
exports.getWeatherDataBySiteName = function(req,res){
    const sitename = req.params.sitename;
    console.log('sitename', sitename)
    const sql = `SELECT * FROM weatherdata WHERE site_name="${sitename}"`
    console.log('sql', sql)
    connection.query(sql, function(err, rows, fields) {
      console.log('rows', rows)

        if (err) throw err;
        res.status(200);

        res.send(JSON.stringify(rows));	  
    });	
}
// POST /team
// Add your code here
