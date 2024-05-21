import { useRef, useEffect, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageCount, setImageCount] = useState(0);

  const getMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing the camera", err);
    }
  };

  // 이미지 캡쳐 기능
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (canvas && video && imageCount < 4) {
      // 최대 4개의 이미지만 캡처
      const context = canvas.getContext("2d");
      const width = video.videoWidth;
      const height = video.videoHeight;
      // 첫 번째 이미지 캡처 시에만 Canvas 크기 설정
      if (imageCount === 0) {
        canvas.width = width * 4;
        canvas.height = height;
      }
      // 이미지를 Canvas에 그리기
      context.drawImage(video, imageCount * width, 0, width, height);
      setImageCount((prevCount) => prevCount + 1); // 이미지 카운트 증가
    }
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const imageUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "captured-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // 캡쳐 리셋 기능
  const resetCapture = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      setImageCount(0);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div className="video">
      <video
        ref={videoRef}
        autoPlay
        playsInline
      />
      <canvas ref={canvasRef}></canvas>
      <button
        onClick={captureImage}
        disabled={imageCount >= 4}
      >
        캡쳐
      </button>
      <button onClick={resetCapture}>리셋</button>
      <button onClick={saveImage}>저장</button>
    </div>
  );
};

export default Video;
