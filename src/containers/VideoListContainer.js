import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
let mapStateToProps = (state) => ({
  videos: state.videoList
});

let mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }
});

let VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;
