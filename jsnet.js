#!/usr/bin/env node



var exec = require('child_process').exec;
exec("gnome-terminal -- '/home/alejandro/Documents/GitHub-Proyects/jsnet/index.js'", function(error, stdout, stderr){
  console.log(stdout);
});



