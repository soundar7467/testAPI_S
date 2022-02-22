var express = require('express');
var http = require('http');
let request = require('request');
let fs = require('fs');

http.createServer((req,res)=>{
	console.log('server conntected 8000');
}).listen(8000)

request('https://icanhazdadjoke.com/slack',(error,reponse,body)=>{
	// console.log('error',error)
	
	let bodyData = JSON.parse(body);
	// console.log('body',body)

	fs.writeFile('jokes.txt',bodyData.attachments[0],(err)=>{
		if(err) throw err;
		console.log('File updated');
	});
});