import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

import styles from "./cam.module.css";
// const WebcamComponent = () => <Webcam />;
// const videoConstraints = ;

const WebcamCapture = () => {
  let [height, setheight] = useState(100);
  let [width, setwidth] = useState(100);

  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    var a = document.createElement("a");
    a.href = imageSrc;
    a.download = "image.png";
    a.click();
  };

  useEffect(() => {
    setwidth(Math.round(window.innerWidth / 1.2));
    setheight(Math.round(window.innerHeight / 1.2));
  }, []);

  return (
    <>
      <div className={styles.center}>
        <Webcam
          audio={false}
          height={height}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={width}
          videoConstraints={{
            width: width,
            height: height,
            facingMode: "user",
          }}
        />
      </div>
      <div className={styles.center}>
        <button className={styles.but} onClick={capture}>
          CAPTURE
        </button>
      </div>
    </>
  );
};

export default WebcamCapture;
