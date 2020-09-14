import React, { useState, useEffect , useContext } from 'react';
import logo from './logo.svg';
import './VideoPlayer.css';
import { Link } from 'react-router-dom';

import AppContext from './AppContext';

function VideoPlayer(props) {
  const [detail, ..._] = useState(props.detail)
  const appContext = useContext(AppContext);
  console.log(appContext)

  useEffect(async() => {
      
  },[]);

  return (
    <div className="App">
      <header className="App-header">
          <div>
              <Link to="/list">bakc</Link>
              {
                console.log("player ->"+appContext.player)
              }
            <div>{appContext.player.video_url}</div>
            <video  controls autoPlay src={appContext.player.video_url||""} className="Video-player"></video>  
          </div>          
       </header>
    </div>
  );
}

export default VideoPlayer;
