import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './VideoList.css';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

import AppContext from './AppContext';

function VideoList() {
  const [count, setCount] = useState(0);
  const [playDetail, setPlayDetail] = useState({});

  const [videolist, setVideoList] = useState(
    [...Array(5)].map((_, i) => ({
      title: `dummy title No.${i}`,
      video_url: "",
      thumbnail_url: "",
      is_dummy: true,
      duration: "",
      create_date: ""
    }))
  )
  const controller = new AbortController()
  const { signal } = controller
  let finished = false

  useEffect(async () => {
    const playlist = await fetch("/api/playlist.json",).then(res => res.json())
    console.log(playlist)
    setVideoList([...videolist.filter(e => !e.is_dummy),
    ...playlist.map(e => ({ ...e, is_dummy: false }))
    ]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button> */}

        <AppContext.Consumer>
          
          { (player)=>(
            <div>
              <VideoPlayer ></VideoPlayer>
              {videolist.map((detail, index)=>(
                // <Link to="/play">
                  <div onClick={(event) => ( player = detail)}>
                    <img src={detail.thumbnail_url} className="List-item"></img>
                    {detail.title}
                  </div>
                // </Link>
  
              ))
              }
            </div>
            )
          }
        </AppContext.Consumer>


      </header>
    </div>
  );
}

export default VideoList;
