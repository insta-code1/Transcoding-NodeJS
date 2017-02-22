const exec = require('child_process').exec;
const fs = require('fs');


let transcode = (videoFn) => {
  let video = videoFn.split(".")[0];

  let cmd = `mkdir -p ./output/${video}/ && ffmpeg -i ./input/${videoFn} -start_number 0 -hls_time 10 -hls_list_size 0 -strict -2 ./output/${video}/${video}.m3u8`;

  exec(cmd, function(error, stdout, stderr) {
    // command output is in stdout
    console.log(stdout);
    console.log(stderr);
  });
}

const inputFolder = './input';

fs.readdir(inputFolder, (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    transcode(file);
  })
});