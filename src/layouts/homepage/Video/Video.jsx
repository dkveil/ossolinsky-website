import React from 'react';
import { Wrapper } from './Video.styles';
import VideoSrc from 'assets/videos/homepage/07_video.mp4';

export const Video = () => {
    return (
        <Wrapper>
            <video src={VideoSrc} autoPlay={true} loop={true} muted />
        </Wrapper>
    );
};

export default Video;
