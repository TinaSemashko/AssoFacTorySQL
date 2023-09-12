import VideoAccueil from "../videos/VideoAccueil.mp4";

const VideoOne = () => (
  <div>
    {/* <Parallax className="video"> */}
    <video className="video" src={VideoAccueil} autoPlay loop muted />
    <div className="content">
      <span className="img-txt">AssoFacTory</span>
    </div>
  </div>
  // </Parallax>
);

export default VideoOne;
