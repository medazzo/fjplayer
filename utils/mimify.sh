#!/bin/bash


#fjplayer.min.js
../node_modules/uglify-js/bin/uglifyjs    ./base64.js ../dist/fjplayer.js --preamble  "/* Fjplayer is a copyright @ EASYSOFTIN */" -o ../dist/fjplayer.min.js --stats
#fjplayer.all.min.js
../node_modules/uglify-js/bin/uglifyjs  ../bower_components/dashjs/dist/dash.min.js  ../bower_components/jquery/dist/jquery.min.js ../bower_components/angular/angular.min.js \
    ../bower_components/bootstrap/dist/js/bootstrap.min.js ../dist/fjplayer.min.js \
         --preamble "/* Fjplayer is a copyright @ EASYSOFTIN */"  -o ../dist/fjplayer.all.min.js --stats
#fjplayer.min.css
../node_modules/uglifycss/uglifycss --max-line-len 0 --ugly-comments ../dist/fjplayer.css   > ../dist/fjplayer.min.css

