import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
let mapDispatchToProp = (state) => ({
  video: state.currentVideo
});

let mapDispatchToProp = (dispatch) => ({})


var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProp
)(VideoPlayer);

export default VideoPlayerContainer;
