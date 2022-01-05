// var itec = require('./ITEC_dataset.json');
// var telecom = require('./Telecom_ParisTech_dataset.json');
let ver = null;
let playlist = null;
let player = null;
let firstPlay = true;

function fjplayerEvent(e) {
  console.info(' We are having an event : ', e);
}

function playfromList() {
  const selected = document.getElementById('itemToplay').value;
  console.log(' will play ..  ', selected);
  const itemParsed = JSON.parse(selected);

  playlist.addItem(itemParsed);

  if (firstPlay) {
    player.on(fjplayer.PlayerEvents.STREAM_LOADED, fjplayerEvent);
    player.loadPlaylist(playlist);
    player.startPlaylist(0, true, false, true);
    firstPlay = false;
  } else {
    player.playNext();
  }
}

/** ***************************************** */
function updateItemChoice() {
  const select = document.getElementById('Mainsel');
  if (select.selectedIndex > 0) {
    console.log(' Ready to play : ');
    console.log(JSON.stringify(JSON.parse(select.value), null, 2));
    document.getElementById('itemToplay').value = select.value;
  } else { document.getElementById('itemToplay').value = ''; }
}
/** ***************************************** */
function loadDatset() {
  // theses two set of data server Blocks data from differents server : CORS policy.
  // $('#datasel').append("<option value='./ITEC_dataset.json'>ITEC dataset</option>");
  // $('#datasel').append("<option value='./Telecom_ParisTech_dataset.json'>Telecom Paris Tech dataset</option>");
  $('#datasel').append("<option value='./local_mp4.json'>server local short mp4 files</option>");
}

function updateDataSet() {
  const select = document.getElementById('datasel');
  if (select.selectedIndex !== 0) {
    console.log(' clearing ..');
    $('#Mainsel').find('option')
      .remove()
      .end()
      .append('<option selected>Select item to play </option>');
    console.log('Updating items ... ', select.selectedIndex);
    $.getJSON(select.value, (ds) => {
      $.each(ds.data, (key, val) => {
        $('#Mainsel').append(`<option value='${JSON.stringify(val)}'>${key}</option>`);
      });
    });
  } else {
    console.log(' clearing ..');
    $('#Mainsel').find('option')
      .remove()
      .end()
      .append('<option selected>Select item to play </option>');
  }
}

window.onload = function () {
  loadDatset();
  ver = new fjplayer.Version();
  console.info('FJPLAYER VERSION', ver.getVersion());
  playlist = new fjplayer.Playlist();
  player = new fjplayer.Player('fjserverID1', 'playercontainer');
};
