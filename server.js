const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors');
const ytdl = require('ytdl-core');

const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const exp = require('constants');


app.get('/css/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'css', 'styles.css'))
})

app.get('/js/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'script.js'))
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})
const server = app.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`)
})

app.get('/download', (req, res) => {
  var URL = req.query.URL;

  var FORMAT = req.query.FORMAT

  

  res.header('Content-Disposition',`attachment; filename=video.${FORMAT}`);

  ytdl(URL,  {
    format: FORMAT
  }).pipe(res);
})


app.get('/mp3', (req,res) =>{

  var URL = req.query.URL;;

  var FORMAT = req.query.FORMAT;

  
  res.setHeader('Content-Type','audio/mpeg');
  res.setHeader('Content-Disposition', `attachment; filename=audio.${FORMAT}`);

  ytdl(URL, { filter: 'audioonly' })
    .pipe(ffmpeg().format('mp3'))
    .pipe(res);

  
})