/* from url https://dash.itec.aau.at/dash-dataset/ */ 
/* obtained using this nodejs script : node itec_helper.js */
const fs = require('fs')

var base="http://ftp.itec.aau.at/datasets/DASHDataset2014/"
var movies = ["BigBuckBunny","ElephantsDream","OfForestAndMen","RedBullPlayStreets","TheSwissAccount","Valkaama","TearsOfSteel"];
var moviesTitles = ["Big Buck Bunny 1080p YUV","Elephants Dream 1080p YUV","Of Forest And Men","Red Bull Play Streets 1080p, 6 Mbit H.264","The Swiss Account 1080p, 6 Mbit H.264","Valkaama 1080p, 6 Mbit H.264","Tears Of Steel 720p"];
var segments = ["1sec","2sec","4sec","6sec","10sec","15sec"]
var segments_short = ["1s","2s","4s","6s","10s","15s"]
var types=["simple_2014_05_09.mpd","onDemand_2014_05_09.mpd"]
var types_short=["simple","onDemand"]

var all = {};
for (var i = 0; i < movies.length; i++) {
for (var j= 0; j < segments.length; j++) {  
for (var k= 0; k < types.length; k++) {  
	var url= base+movies[i]+"/"+segments[j]+"/"+movies[i]+"_"+segments_short[j]+"_"+types[k];
  var short= movies[i]+"_"+segments_short[j]+"_"+types_short[k];
	
  all[short] = {}
  all[short]["FJTitle"] = moviesTitles[i];
  all[short]["FJTitle"] = moviesTitles[i];
  all[short]["FJType"] = "dash";
  all[short]["FJClass"] = "vod";
  all[short]["FJSrc"] = url;
  
      
}
}
}
var string = JSON.stringify(all, null, 4);

fs.writeFile('./ITEC_dataset.json', string, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
