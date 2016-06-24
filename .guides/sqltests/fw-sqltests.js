'use strict';
/*
	SQL Challenges framework
	Version: 5.0 as of SQL3
	Build, check, reset
*/
var workspaceDirectory = '/home/codio/workspace/';
var sqlDir = workspaceDirectory + '.guides/sqltests/';

var mysql       = require('mysql'),
		fs          = require('fs'),
		errorLogs   = require('./fw-errorLogs.js');

// Globals
var tasksArr, connection, count = 0, db;

// MySQL
function connectTo(db) {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
    password : 'codio',
	  database : db
	});
	connection.connect();
}

// Test environment
function test(){
	if (count < tasksArr.length) {
		var query = tasksArr[count][1];
		return new Promise(function(resolve, reject){
			connectTo(db);
			connection.query(query, function(err, rows, fields) {
				if (err) {
          console.log('Well done!');
      		process.exit(0); 
        } else if (rows.length < 1) {
          console.log('Well done!');
      		process.exit(0); 
        } else {
          // console.log(rows);
  				count++;
	  			test(); 
        }
			});
		});
	} else {
    errorLogs.queryMismatch(count, tasksArr[count-1][0]);
	}
}

// Reset environment
function reset(){
	if (count < tasksArr.length) {
		var query = tasksArr[count][1];
		return new Promise(function(resolve, reject){
			connectTo(db);
			connection.query(query, function(err, rows, fields) {
				if (err) {
          // console.log(err);
          errorLogs.resetFailed(tasksArr[count][0]); 
        }
				// console.log(rows);
				count++;
				reset();
			});
		});
	} else {
		errorLogs.reset(tasksArr[count-1][0]);
	}
}



// Init 
exports.init = function(tasks, dbName) {
	tasksArr = tasks, db = dbName;
	test();
}

exports.reset = function(tasks, dbName) {
	tasksArr = tasks, db = dbName;
	reset();
}