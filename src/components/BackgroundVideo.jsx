export default function BackgroundVideo() {
  return (
    <video className="video-bg" autoPlay loop muted playsInline>
      <source src="/snow.mp4" type="video/mp4" />
    </video>
  );
}
