let ffmpeg = require('ffmpeg');

try {
  new ffmpeg('./input/example_video.mp4', (err, video) => {
    debugger;
    if (!err) {
      console.log('The video is ready to be processed');
      video
        .addOption('-strict', 'experimental')
        .setVideoFormat('hls')
        .save('./output/output.m3u8', (error, file) => {
        if (file) {
          console.log(`Created: ${file}`);
        } else {
          console.log( `Error saving file: ${error.message}`)
        }
      });
    } else {
      console.log(`Error: ${err}`);
    }
  });
} catch (e) {
  console.log(e.code);
  console.log(e.message);
}