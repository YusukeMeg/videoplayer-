import React from 'react';


const AppContext = React.createContext({
    pleyer:     {
        "title": "1080P_4000K_198428961",
        "video_url": "video/1080P_4000K_198428961.mp4",
        "thumbnail_url": "thumbs/1080P_4000K_198428961.jpg",
        "duration": "",
        "create_date": ""
    },
    playlist: []
  });
export default AppContext;