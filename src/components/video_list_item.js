import React from 'react';

// Access the video for each video item:
// Because we set the property "video" equal to the array "video" in the <VideoListItem /> in the component video_list.js we access it here by calling props.video. With ES6 we can refactor our code to "const = VideoListItem = ({ video }) => {..." instead of "const = VideoListItem = (props) => { const video = props.video; ... }" We can do this because the property we are accessing (video) has the same value for the key and value. When we do this ES6 still creates a const variable called video that is equal to props.video. Same same.
const VideoListItem = ({ video }) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
