import '../img/icon.png'
import ytdl from 'ytdl-core';

ytdl.getInfo("7xXEtO3bEe0", (err, info) => {
  if (err)
    throw err;

  var audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
  var song = audioFormats.filter((data) => data.container=="m4a")
  if (song) {
    console.log('Format found!');
    console.log(song[0].url);
    chrome.downloads.download({
      url: song[0].url,
      saveAs:true,
      filename:"boyc.mp3"
    }, function(id) {
      console.log("id:" + id)
    });
  }
});
