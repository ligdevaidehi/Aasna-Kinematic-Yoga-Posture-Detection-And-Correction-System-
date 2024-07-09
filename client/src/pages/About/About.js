import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    <p>This is a realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    This AI first predicts keypoints or coordinates of different parts of the body (basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose with precision then it will notify you are 
                    doing correctly (by making virtual skeleton green). </p> <p>We have used Tensorflow pretrained Movenet model to predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.




                    We have trained the model in python. Since tensorflowJS can leverage the support  of tensorflowJS we can leverage the support of browser, so we converted 
                    the keras/tensorflow model to tensorflowJS.</p>
                </p>
                <div className="developer-info">
                    <h4>Developers</h4>
                    <li>Akshay Khare</li>
                    <li>Chinmay Kanchanwar</li>
                    <li>Swadesh Kelkar</li>
                </div>
            </div>
        </div>
    )
}
