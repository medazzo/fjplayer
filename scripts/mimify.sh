#!/bin/bash


#fjplayer.min.js
../node_modules/uglify-js/bin/uglifyjs    ../src/utils/base64.js ../src/js/fjplayer.js --preamble  "/* Fjplayer is a copyright @ EASYSOFTIN */" -o ../dist/fjplayer.min.js --stats
#fjplayer.all.min.js
../node_modules/uglify-js/bin/uglifyjs  ../bower_components/dashjs/dist/dash.all.js  ../bower_components/jquery/dist/jquery.min.js ../bower_components/angular/angular.min.js \
    ../bower_components/bootstrap/dist/js/bootstrap.min.js ../dist/fjplayer.min.js \
         --preamble "/* Fjplayer is a copyright @ EASYSOFTIN */"  -o ../dist/fjplayer.all.js --stats
#fjplayer.min.css
../node_modules/uglifycss/uglifycss --max-line-len 0 --ugly-comments ../src/css/fjplayer.css   > ../dist/fjplayer.min.css
#fjplayer.all.css
../node_modules/uglifycss/uglifycss --max-line-len 0 --ugly-comments ../bower_components/bootstrap/dist/css/bootstrap.css ../src/css/fjplayer.css   > ../dist/fjplayer.all.css
#cp template
cp ../src/html/fjplayer-tmpl.html   ../dist/fjplayer-tmpl.html 
 