import Testimonial from '../Testimonial/Testimonial';
import VideoSection from '../VideoSection/VideoSection';
import classes from './VideoSliderContent.module.scss';

const VideoSliderContent = ({ video, name, testimonial, story }) => {
  return (
    <div className={classes.VideoSliderContent}>
      <VideoSection url={video} story={story} />
      <Testimonial
        header='WHAT OUR USERS SAY'
        name={name}
        testimonial={testimonial}
      />
    </div>
  );
};

export default VideoSliderContent;
