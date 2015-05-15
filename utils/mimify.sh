#!/bin/bash

#fj.js
../node_modules/uglify-js/bin/uglifyjs  ../dist/fjplayer.js --comments -o ../dist/fjplayer.min.js
#fj.css
../node_modules/uglifycss/uglifycss --max-line-len 0 --ugly-comments ../dist/fjplayer.css   > ../dist/fjplayer.min.css
#dash.js
#../node_modules/uglify-js/bin/uglifyjs  ./fjdash.debug.js --charset utf-8 --nomunge --type js --preserve-semi -o ./fjdash.min.js
#b64.js
#../node_modules/uglify-js/bin/uglifyjs  ./fjbase64.js --charset utf-8 --nomunge --type js --preserve-semi -o ./fjbase64.min.js
