var fs = require('fs');
var playlist;
(async()=>{
    fs.readdir('./video', function(err, files){
        if (err) throw err;
        // console.log(files);
    
        playlist = files.filter(file=>/\.mp4/.test(file)).map(file=>file.replace(".mp4","")).map(file=>(
            {
                title: file,
                video_url:`video/${file}.mp4`,
                thumbnail_url:`thumbs/${file}.jpg`,
                duration: "",
                create_date: ""
            }))
    
     
        console.log(playlist);
            
        fs.writeFile('hoge.json', JSON.stringify(playlist, null, '    '),()=>{});
        
        // var fileList = files.filter(function(file){
        //     return fs.statSync(file).isFile() && /.*\.mp4$/.test(file); //絞り込み
        // })
        // console.log(fileList);
    });

        
})()


