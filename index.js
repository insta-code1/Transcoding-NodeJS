let ffmpeg = require('ffmpeg');

try {
  new ffmpeg('/home/insta/editing_videos/example_video.mp4', (err, video) => {
    if (!err) {
      console.log('The video is ready to be processed');
    } else {
      console.log(`Error: ${err}`);
    }
  });
} catch (error) {
  console.log(e.code);
  console.log(e.message);
}