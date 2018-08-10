import React from 'react';
import VideoListItem from './video_list_item';

// The props object defined as "videos={this.state.videos}" in <VideoList videos={this.state.videos}/> in index.js will arrive as an argument of our functional component VideoList.

// Instead of using a for() loop to loop over our array of videos we can/should use the onboard functionality of Javascript's map() which is a method is used to apply a function on every element in an array. A new array is then returned. In order to reference the arrays returned from props.videos we store it in a const called videoItems which we then pass into the return of or function VideoList.
// List Item ID: To keep track of list items React needs a "key" with a unique identifying value. Each Youtube video object has a property called "etag" which is a multi-character unique ID. Set the "key" property on the return JSX <VideoListItem /> with the value "video.etag" to access the etag value. The key value can be anything. It just needs to be consistent.
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });
  return (
    <ul className="col-md-4">
      {videoItems}
    </ul>
  );
}
export default VideoList;
